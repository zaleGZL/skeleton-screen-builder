const fs = require('fs');
const path = require('path');
const minify = require('html-minifier').minify;
const generateHtmlAndCss = require('../generateHtmlAndCss');

// 设置忽略添加骨架屏的文件的名称
const ignoreHtmlFilesName = [];


// 项目的 html 文件目录
const projectHtmlPath = path.resolve(__dirname, '../../../../src/html');
// 骨架屏的目录
const skeletonScreenPath = path.resolve(__dirname, '../../');


// 获取项目的 html 文件目录下的文件名称和路径
const htmlFilesName = fs.readdirSync(projectHtmlPath).filter((fileName) => {
    return fileName.endsWith('.html');
});
// 获取骨架屏的文件名称
const skeletonScreenFilesName = fs.readdirSync(skeletonScreenPath).filter((fileName) => {
    return fileName.indexOf('.') === -1 && fileName !== 'skeleton';
});


// 遍历 html 文件并插入骨架屏
for (let fileName of htmlFilesName) {

    // 对应骨架屏的名称
    const skeletonScreenName = fileName.slice(0, -5);

    // 检查是否在忽略的列表中
    if (ignoreHtmlFilesName.indexOf(fileName) >= 0) {
        console.log(`---- ${fileName} 文件忽略`);
        continue;
    }

    // 检查是否有对应的骨架屏
    if (!skeletonScreenFilesName.includes(skeletonScreenName)) {
        console.log(`---- ${fileName} 不存在骨架屏`);
        continue;
    }

    // 提取 html
    let originalHtml = fs.readFileSync(path.resolve(skeletonScreenPath, skeletonScreenName, 'index.js')).toString();
    originalHtml = originalHtml.match(/<div(\r\n|\r|\n|.)*<\/div>/m)[0].replace(/className/g, 'class');
    originalHtml = minify(originalHtml, { collapseWhitespace: true }); // 代码压缩

    // 提取 css
    let originalCss = fs.readFileSync(path.resolve(skeletonScreenPath, skeletonScreenName, 'index.css')).toString();
    const cssPrefix = originalCss.match(/ske-\w+?-/)[0]; // css 属性前缀

    // 生成替换和压缩后的 html 和 css
    const { htmlContent, cssContent }  = generateHtmlAndCss(originalHtml, originalCss, cssPrefix);

    // 将骨架屏的 html 和 css 加入到 html 中
    let indexHtml = fs.readFileSync(path.resolve(projectHtmlPath, fileName)).toString();
    const rootElement = indexHtml.match(/<div.*?><\/div>/)[0];
    const htmlStartIndex = rootElement.indexOf('</div>');

    indexHtml = indexHtml.replace(rootElement, rootElement.slice(0, htmlStartIndex) + htmlContent + rootElement.slice(htmlStartIndex));
    indexHtml = indexHtml.replace(/<style>.*<\/style>/, `<style>${cssContent}</style>`);

    fs.writeFileSync(path.resolve(projectHtmlPath, fileName), indexHtml);
    console.log(`---- ${fileName} 骨架屏写入成功`);
}

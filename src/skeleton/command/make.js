const fs = require('fs');
const path = require('path');

const args = process.argv;
const [interpreterPath, commandPath, componentName, cssPrefix] = args;
let componentFileName = '';
let componentFilePath = '';
let componentSrcPath = '';

function printErrorMessage(errorMessage) {
    console.log(errorMessage);
    console.log('');
    console.log('命令使用说明:');
    console.log('参数一: 组件的名称(由字母构成，不能重复，驼峰式命名，第一个字母需要大写) 例如: privilegeManagement .');
    console.log('参数二: 组件的CSS前缀(由字母构成，不能重复，至少由两个字母构成) 例如 pm .');
}


// 检查参数个数是否正确
if (args.length !== 4) {
    printErrorMessage('参数个数错误，该命令只需要两个参数.');
    return;
}

// 检查组件名称的正确性
const componentNamePatt = /^[A-Z][a-zA-Z]*$/;
if (!componentNamePatt.test(componentName)) {
    printErrorMessage('组件的名称参数出错!');
    return;
}

// 检查组件的 CSS 前缀的正确性
const cssPrefixPatt = /^[a-zA-Z]{2,}$/;
if (!cssPrefixPatt.test(cssPrefix)) {
    printErrorMessage('组件的CSS前缀参数出错!');
    return;
}

// 组件存放的文件名称
componentFileName = componentName[0].toLowerCase() + componentName.slice(1);
// 组件存放的文件路径
componentFilePath = path.resolve(path.dirname(commandPath), '../../', componentFileName);
// 项目源目录
componentSrcPath = path.resolve(path.dirname(commandPath), '../../');


// 验证 cssprefix 是否已经存在
const files = fs.readdirSync(componentSrcPath).filter((fileName) => {
    return fileName.indexOf('.') === -1 && fileName !== 'skeleton';
});
let componentCssPrefix = [];
files.forEach((fileName) => {
    const cssFilePath = path.resolve(componentSrcPath, fileName, 'index.css');
    const cssContent = fs.readFileSync(cssFilePath).toString();
    const matchCssPrefix = cssContent.match(/ske-[a-zA-Z]+-/);
    if (matchCssPrefix) {
        componentCssPrefix.push(matchCssPrefix[0]);
    }
});
if (componentCssPrefix.indexOf(`ske-${cssPrefix}-`) > -1) {
    printErrorMessage('组件的CSS前缀已经存在');
    return;
}


try {
    // 在 src 目录下创建组件的文件夹
    fs.mkdirSync(componentFilePath);
} catch (err) {
    if (err.code === 'EEXIST') {
        printErrorMessage('组件名称已经存在!');
        return;
    } else {
        console.log(err);
        printErrorMessage('其它错误!');
        return;
    }
}

try {
    // 读取 index.js 模板文件并放到组件目录中
    let jsContent = fs.readFileSync(path.resolve(path.dirname(commandPath), '../template/index-js')).toString();
    jsContent = jsContent.replace(new RegExp(/\${_Component}/, 'g'), componentName);
    jsContent = jsContent.replace(new RegExp(/\${_cssPrefix}/, 'g'), cssPrefix);
    fs.writeFileSync(path.resolve(componentFilePath, 'index.js'), jsContent);

    // 读取 index.css 模板文件并放到组件目录中
    let cssContent = fs.readFileSync(path.resolve(path.dirname(commandPath), '../template/index-css')).toString();
    cssContent = cssContent.replace(new RegExp(/\${_cssPrefix}/, 'g'), cssPrefix);
    fs.writeFileSync(path.resolve(componentFilePath, 'index.css'), cssContent);
} catch (err) {
    console.log(err);
    return;
}

console.log('组件创建成功!');



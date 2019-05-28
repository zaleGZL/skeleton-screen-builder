const getRandomCharacter = require('./utils').getRandomCharacter;
const csso = require('csso');

/**
 * 生成替换后的 HTML 和 CSS
 * @param {string} originalHtml 原始 HTML 内容
 * @param {string} originalCss 原始 CSS 内容
 * @param {string} cssPrefix 唯一的 CSS 前缀
 */
const generateHtmlAndCss = (originalHtml, originalCss, cssPrefix) => {
    let htmlContent;
    let cssContent;
    let originHtmlContent;
    let originCssContent;

    let reg = /class="[a-zA-Z0-9\s-]+?"/g;
    const match = originalHtml.match(reg) || [];
    let allClassName = [];
    let randomClassName = [];
    let byteCount = [0, 0, 0];
    let originByteCount = [0, 0, 0];

    // 提取出类名
    for (let i = 0; i < match.length; i++) {
        const className = match[i].slice(7, match[i].length - 1).split(' ');
        for (let j = 0; j < className.length; j++) {
            if (!allClassName.includes(className[j])) {
                allClassName.push(className[j]);
            }
        }
    }

    // 生成随机类名
    while (!(randomClassName.length === allClassName.length)) {
        const className = getRandomCharacter(3);
        if (!randomClassName.includes(className)) {
            randomClassName.push('ske-' + className);
        }
    }

    // 对所有类名进行过滤和排序
    allClassName = allClassName.filter(className => {
        return className.startsWith(cssPrefix);
    });
    allClassName.sort((a, b) => {
        return b.length - a.length;
    });

    // 生成 html
    htmlContent = originalHtml;
    for (let i = 0, length = allClassName.length; i < length; i++) {
        htmlContent = htmlContent.replace(new RegExp(allClassName[i], 'g'), randomClassName[i]);
    }

    // 生成 css
    cssContent = originalCss;
    for (let i = 0, length = allClassName.length; i < length; i++) {
        cssContent = cssContent.replace(new RegExp(allClassName[i], 'g'), randomClassName[i]);
    }
    cssContent = csso.minify(cssContent).css;

    // 原始 html 和 css 内容
    originHtmlContent = originalHtml;
    originCssContent = csso.minify(originalCss).css;

    byteCount = [htmlContent.length, cssContent.length, htmlContent.length + cssContent.length];
    originByteCount = [originHtmlContent.length, originCssContent.length, originHtmlContent.length + originCssContent.length];

    // test
    console.log(htmlContent.length);
    console.log(cssContent.length);

    return {
        htmlContent,
        cssContent,
        originHtmlContent,
        originCssContent,
        originByteCount,
        byteCount
    }
}

module.exports = generateHtmlAndCss;

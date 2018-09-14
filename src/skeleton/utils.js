/**
 * 返回指定长度的随机字母（大小写都可）
 * @param {number} length 长度
 */
const getRandomCharacter = (length) => {
    let character = [];
    for (let i = 0; i < length; i++) {
        character.push(parseInt((Math.random()) * 10, 10) % 2 === 0 ? getCharacter('lower') : getCharacter('upper'));
    }
    return character.join('');
}

/**
 * 返回一个字母
 */
const getCharacter = (flag) => {
    let character = '';
    if (flag === 'lower') {
        character = String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
    }
    if (flag === 'upper') {
        character = String.fromCharCode(Math.floor(Math.random() * 26) + 'A'.charCodeAt(0));
    }
    return character;
}

module.exports = {
    getRandomCharacter,
    getCharacter
}

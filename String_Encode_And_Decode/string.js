/**
     * @param {string[]} strs
     * @returns {string}
     */
function encode(strs) {
    let str = new String();
    let temp = new String();
    for (let i = 0; i < strs.length; i++) {
        temp = ""
        temp += strs[i].length
        temp = temp.padStart(4, "0");
        str += temp;
        str += strs[i];
    }
    return str;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
    let strs = [];
    let temp = 0;

    for (let i = 0; i < str.length; i += temp) {
        temp = str.slice(i, i + 4);
        temp = parseInt(temp, 10);
        strs.push(str.slice(i + 4, i + 4 + temp))
        temp += 4;
    }
    return strs;
}
let input = ["neet", "code", "love", "you"]
console.log(encode(input));
console.log(decode(encode(input)));
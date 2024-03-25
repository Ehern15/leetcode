/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let openStack = new Array(n);
    let closeStack = new Array(n);
    openStack.fill('(');
    closeStack.fill(')');
    let str = openStack.concat(closeStack);
    str = str.join('')
    
};
let n = 3
generateParenthesis(n);
n = 1;
generateParenthesis(n);
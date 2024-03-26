/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const recurse = function(l,r,s){
        if(s.length === 2 * n){
            result.push(s);
            return;
        }
        if(l < n){
            recurse(l + 1,r,s + '(');
        }
        if(r < l){
            recurse(l,r + 1,s + ')');
        }
        
    }
    recurse(0,0,"");
    return result;
};
let n = 3
generateParenthesis(n);
n = 1;
generateParenthesis(n);
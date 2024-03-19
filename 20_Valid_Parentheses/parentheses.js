/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length;i++){
        console.log(s.charAt(i))
        if(s.charAt(i) == '(' || s.charAt(i) == '['|| s.charAt(i) == '{' ){
            stack.push(s.charAt(i));
            console.log("push")
        }
        if(s.charAt(i) == ')' || s.charAt(i) == ']'|| s.charAt(i) == '}' ){
            stack.pop();
            console.log("pop")
        }
    }
    console.log(stack)
    if (stack === undefined){
        return true;
    }else{
        return false;
    }
};
let s = "()"
console.log(isValid(s));
s = "()[]{}"
console.log(isValid(s));
s = "(]"
console.log(isValid(s));
/**
 * @param {string} s
 * @return {boolean}
 */
var isOpen = function (c){
if(c == '('|| c =='['||c == '{'){
    return true;
}else{
    return false;
}
}
var isClose = function(c){
    if(c == ')'|| c ==']'||c == '}'){
        return true;
    }else{
        return false;
    }
}
var getOpen = function(c){
if(c == ')'){
    return '('
}
if(c == ']'){
    return '['
}
if(c == '}'){
    return '{'
}
}
var peek = function(stack){
    if(stack.length == 0){
        return -1;
    }else{
        return stack[stack.length-1];
    }
}
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s.charAt(i))
        let symbol = s.charAt(i)
        if (isOpen(symbol)){
            stack.push(symbol);
            console.log("push");
        }
        if(isClose(symbol) && peek(stack) != getOpen(symbol)){
            return false;
        }
        if(isClose(symbol) && peek(stack) == getOpen(symbol)){
            stack.pop();
        }

    }
    if (stack.length == 0){
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
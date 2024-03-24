/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let temp = ""
        if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/") {
            temp = stack.pop();
            temp = "(" + stack.pop() + ")" + tokens[i] + "(" + temp + ")";
            let result = Math.trunc(eval(temp));
            stack.push(result);
        } else {
            stack.push(tokens[i]);
        }
    }
    return stack;
};
let tokens = ["2", "1", "+", "3", "*"];
evalRPN(tokens);
tokens = ["4", "13", "5", "/", "+"];
evalRPN(tokens);
tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
evalRPN(tokens);
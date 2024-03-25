/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let indexStack = [];
    let result = [];
    for (let i = 0; i < temperatures.length; i++) {
        if (stack[stack.length - 1] > temperatures[i] || stack.length == 0) {
            console.log("push")
            stack.push(temperatures[i]);
            indexStack.push(i);
        } else {
            console.log("pop-push")
            while (stack[stack.length - 1] < temperatures[i]) {
                stack.pop()
                let temp = indexStack.pop();
                result[temp] = i - temp;
            }
            stack.push(temperatures[i]);
            indexStack.push(i);
        }
        if (i == temperatures.length - 1) {
            while (stack.length != 0) {
                stack.pop()
                let temp = indexStack.pop();
                result[temp] = 0;
            }

        }
    }
    return result;
};
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
temperatures = [30, 40, 50, 60];
console.log(dailyTemperatures(temperatures));
temperatures = [30, 60, 90];
console.log(dailyTemperatures(temperatures));
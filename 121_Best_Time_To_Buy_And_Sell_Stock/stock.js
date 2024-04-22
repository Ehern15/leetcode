/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    let maxSum = 0;
    let buy = prices[0];
    for (let i = 0; i < prices.length; i++) {
        sum = prices[i] - buy;
        if(sum > maxSum){
            maxSum = sum;
        }
        if(prices[i] < buy){
            buy = prices[i];
        }
    }
    return maxSum > 0 ? maxSum : 0;
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
prices = [7,6,4,3,1];
console.log(maxProfit(prices));
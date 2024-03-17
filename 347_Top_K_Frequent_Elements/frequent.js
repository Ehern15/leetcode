/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let answer = new Map;

    let value = 1;
    for (let i = 0; i < nums.length; i++) {

        if (answer.has(nums[i])) {
            answer.set(nums[i], answer.get(nums[i]) + 1);
        } else {
            value = 1;
            answer.set(nums[i], value);
        }
    }

    const newMap = Array.from(answer).sort((a, b) => b[1] - a[1]);
    console.log(newMap)
    let arr = new Array;

    for (let [key, value] of newMap) {
        arr.push(key);
    }
    
    while(arr.length > k){
        arr.pop();
    }

    return arr;
};
let nums = [1, 1, 3, 4, 4, 4, 4, 4, 4, 5, 5,], k = 2;
topKFrequent(nums, k);
nums = [1], k = 1;
topKFrequent(nums, k);
nums = [1, 2, 3, 200, 100, -300];
nums = [3, 0, 1, 0]
topKFrequent(nums, 1);
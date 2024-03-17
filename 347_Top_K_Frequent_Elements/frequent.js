/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    nums.sort((a, b) => a - b);
    let answer = new Array(k);
    
    for(let i = 0; i < nums.length; i++){

    }
};
let nums = [1,1,1,2,2,3], k = 2;
topKFrequent(nums,k);
nums = [1], k = 1;
topKFrequent(nums,k);
nums = [1,2,3,200,100,-300];
topKFrequent(nums);
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(target == nums[i] + nums[j] && i != j){
                const newArr = new Array(i,j);
                return newArr;
            }
        }
    }
};
let nums = [2,7,11,15], target = 9;
twoSum(nums,target);
nums = [3,2,4], target = 6;
twoSum(nums,target);
nums = [3,3], target = 6;
twoSum(nums,target);
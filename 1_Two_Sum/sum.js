/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};
let nums = [2,7,11,15], target = 9;
twoSum(nums,target);
nums = [3,2,4], target = 6;
twoSum(nums,target);
nums = [3,3], target = 6;
twoSum(nums,target);
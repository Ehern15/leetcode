/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]) + 1, i+ 1];
        } else {
            map.set(nums[i], i);
        }
    }
};
let numbers = [2,7,11,15], target = 9
console.log(twoSum(numbers,target))
numbers = [2,3,4], target = 6
console.log(twoSum(numbers,target))
numbers = [-1,0], target = -1
console.log(twoSum(numbers,target))
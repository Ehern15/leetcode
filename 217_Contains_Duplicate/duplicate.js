/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set([]);
    for (let index = 0; index < array.length; index++) {
        if(set.has(nums[index])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};
let nums1 = [1,2,3,1];
let nums2 = [1,2,3,4];
let nums3 = [1,1,1,3,3,4,3,2,4,2];
containsDuplicate(num1);
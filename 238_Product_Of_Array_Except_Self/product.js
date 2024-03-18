/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix_product = 1;
    let suffix_product = 1;

    for (let i = 0,j=nums.length-1;i<nums.length;i++,j--) {
        prefix_product *= nums[i];
        suffix_product *= nums[j];
        
    }
    
    
    
    return nums;
};
let nums = [1,2,3,4]
productExceptSelf(nums);
nums = [-1,1,0,-3,3]
productExceptSelf(nums);
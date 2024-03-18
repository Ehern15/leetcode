/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix_product = new Array(nums.length)
    let suffix_product = new Array(nums.length)
    prefix_product.fill(1);
    suffix_product.fill(1);
    let temp1 = 1;
    let temp2 = 1;

    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        prefix_product[i] = temp1;
        temp1 *= nums[i];
        suffix_product[j] = temp2
        temp2 *= nums[j];
    }
    for (let i = 0; i < nums.length;i++){
        nums[i] = prefix_product[i] * suffix_product[i];
    }

        return nums;
};
let nums = [1, 2, 3, 4]
productExceptSelf(nums);
nums = [-1, 1, 0, -3, 3]
productExceptSelf(nums);
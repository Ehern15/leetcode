/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    let min = 5001;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] < min) {
            min = nums[mid];
        }
        if (nums[low] < min) {
            min = nums[low];
        }
        if (nums[high] < min) {
            min = nums[high];
        }

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return min;
};

let nums = [3,4,5,1,2];
console.log(findMin(nums));
nums = [4,5,6,7,0,1,2];
console.log(findMin(nums));
nums = [11,13,15,17];
console.log(findMin(nums));
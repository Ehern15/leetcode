/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let mid = Math.floor(nums.length/2);
    let high = nums.length - 1;
    if(nums.length == 1 && nums[mid] == target){
        return mid;
    }
    while(low < high){
        if (target > nums[mid]){
            low = mid;
            mid = Math.ceil((low + high)/2);
            if(target == nums[high]){return high;}
            high--;
        }else if (target < nums[mid]){
            high = mid;
            mid = Math.floor(high/2);
            if(target == nums[low]){return low;}
            low++; 
        }else{
            return mid;
        }
        
    }
    return -1;
};
let nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums,target));
nums = [-1,0,3,5,9,12], target = 2
console.log(search(nums,target));
nums = [5], target = 5;
console.log(search(nums,target));
nums = [-1,0,5];
console.log(search(nums,target));
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
    if (nums.length == 0) { return 0 }
    const set = new Set(nums);
    let arr = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i] + 1) || set.has(nums[i] - 1)) {
            arr.push(nums[i]);
        }
    }
    
    let max, min;
    for (let i = 0; i < arr.length; i++) {
        if (max == undefined || min == undefined) {
            max = arr[i];
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    let temp = 1;
    let sequence = 1;
    for (let i = min; i <= max; i++) {
        console.log(i);
        if (set.has(i) && set.has(i + 1)) {
            temp++;
            
        } else if (temp > sequence) {
            sequence = temp;
            temp = 1;
            
        } else {
            temp = 1;
        }
    }
    return sequence;

};

let nums1 = [-100, 4, 200, 1, 3, 2];
let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums1));

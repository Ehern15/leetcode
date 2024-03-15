/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < nums.length; i++) {
        map1.set(nums[i],nums[i]);
    }
    for (let index = 0; index < map1.size ; index++) {
        if(map1.get(index - 1) === (map1.get(index) - 1) || map1.get(index + 1) === (map1.get(index) + 1))
            map2.set(map1.get(index));
            if (map1.size == 1){
                return map2.size;
            }      
        
    }
    return map2.size;
};

let nums1 = [-100,4,200,1,3,2];
let nums2 = [0,3,7,2,5,8,4,6,0,1];
console.log(longestConsecutive(nums2));

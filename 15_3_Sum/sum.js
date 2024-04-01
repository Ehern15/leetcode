/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.get()
        }
        map.set( )
    }
    console.log(map);
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length;j++){
            if(map.has(-(nums[i] + nums[j]))) {
                answer.push([nums[i],nums[j],map.get(-(nums[i] + nums[j]))]);
            } 
        }
    }
};
let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));
nums = [0,1,1];
console.log(threeSum(nums));
nums = [0,0,0];
console.log(threeSum(nums));
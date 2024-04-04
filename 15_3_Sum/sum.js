/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            let temp1 = map.get(nums[i]);
            temp1.push(i);
        }else{
            map.set(nums[i],[i])
        }
    }
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length;j++){

            if(map.has(0 - (nums[i] + nums[j]))) {
                let temp1 = map.get(0 - (nums[i] + nums[j]));
                if(temp1.length > 0){
                    
                }
                
                
                answer.push([nums[i],nums[j],nums[temp1.pop()]]);
            }
        }
    }
    console.log(map)
    return answer;
};
let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));
nums = [0,1,1];
console.log(threeSum(nums));
nums = [0,0,0];
console.log(threeSum(nums));
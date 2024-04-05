/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if(nums.length == 3){
        return nums;
    }
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            let temp = map.get(nums[i]);
            temp.push(i);
        }else{
            map.set(nums[i],[i])
        }
    }
    for(let i = 0;i < nums.length;i++){
        if(map.get(nums[i]) == []){continue;}
        for(let j = 0;j < nums.length;j++){
            if(map.get(nums[j])){
                
            }
        }
    }
    let answer = [];
    
    
    return answer;
}
    let nums = [-1, 0, 1, 2, -1, -4];
    console.log(threeSum(nums));
    nums = [0, 1, 1];
    console.log(threeSum(nums));
    nums = [0, 0, 0];
    console.log(threeSum(nums));
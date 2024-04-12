/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let answer = [];
    if(nums.length < 3){
        return answer;
    }
    if(nums.length == 3){
        return nums;
    }
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++){
        if(nums[i] > 0){
            break;
        }
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        for(let j = i + 1, k = nums.length - 1; j < k;){
            let sum = nums[i] + nums[j] + nums[k];
            if(0 == sum){
                answer.push([nums[i],nums[j],nums[k]]);
                while(nums[k] == nums[k-1]){k--}
                while(nums[j] == nums[j+1]){j++}
                k--;
                j++;
            }else if(0 < sum){
                k--;
            }else if (0 > sum){
                j++;
            }
        }
    }
    
    return answer;
}
    let nums = [-1, 0, 1, 2, -1, -4];
    console.log(threeSum(nums));
    nums = [0, 1, 1];
    console.log(threeSum(nums));
    nums = [0, 0, 0];
    console.log(threeSum(nums));
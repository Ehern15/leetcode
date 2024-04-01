/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for(let i = 0, j = height.length - 1;i < height - 1;i++,j--){
        max = Math.max(max,(j-i)*Math.min(height[i],height[j]))
    }
    return max;
};
let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));
height = [1,1]
console.log(maxArea(height));
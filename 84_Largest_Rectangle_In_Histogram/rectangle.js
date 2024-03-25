/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0;
    let temp = 0;
    for(let i = 0;i < heights.length;i++){
        if(heights[i+1] >= heights[i]){
            temp = heights[i] + heights[i];
        }
        if(max < temp){
            max = temp;
        }
        if(heights[i] == 1){
            temp = heights.length;
        }
    }
    temp = 0;
    for(let i = 0;i < heights.length;i++){
        temp = heights[i];
        if(max < temp){
            max = temp;
        }
    }

    return max;
};
let heights = [2,1,5,6,2,3]
console.log(largestRectangleArea(heights))
heights = [2,4]
console.log(largestRectangleArea(heights))
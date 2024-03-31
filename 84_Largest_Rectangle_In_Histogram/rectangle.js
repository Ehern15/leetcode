/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [];
    let max = 0;
    heights.push(0);
    for(let i = 0; i < heights.length;i++){
        let start = i;
        while(stack.length && stack[stack.length - 1][1] > heights[i]){
            let [index,height] = stack.pop();
            max = Math.max(max, (i - index) * height)
            start = index;
        }
        stack.push([start, heights[i]]);
    }
    return max;
};
let heights = [1,2,3,4,5];
console.log(largestRectangleArea(heights));
heights = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(heights))
heights = [2, 4]
console.log(largestRectangleArea(heights))
heights = [1,2,2];
console.log(largestRectangleArea(heights))
heights = [2,1,2];
console.log(largestRectangleArea(heights))
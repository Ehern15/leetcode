/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let length = Math.min(height[i], height[j]);
        let width = j - i;
        max = Math.max(max, length * width);
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
height = [1, 1]
console.log(maxArea(height));
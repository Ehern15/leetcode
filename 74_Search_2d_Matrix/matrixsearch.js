/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var newArr = [];

    for (let i = 0; i < matrix.length; i++) {
        newArr = newArr.concat(matrix[i]);
    }
    let low = 0;
    let high = newArr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); 
        if (nums[mid] === target) { 
          return true;
        } else if (nums[mid] < target) { 
    
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
      }

    return false;
};

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3;
console.log(searchMatrix(matrix, target));
matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13;
console.log(searchMatrix(matrix, target));
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;
    let maxLeft = [];
    let maxRight = [];
    let maxWater = new Array(height.length);
    let max = 0;
    for(let i = 0; i <height.length;i++){
        if(i == 0){
            maxLeft[i] = 0;
            max = height[i];
            continue;
        }

        maxLeft[i] = max;

        if(height[i] > max){
            max = height[i];
        }
            
        
    }
    max = 0;
    for(let i = height.length - 1; i >= 0;i--){
        if(i == height.length - 1){
            maxRight[i] = 0;
            max = height[i];
            continue;
        }

        maxRight[i] = max;

        if(height[i] > max){
            max = height[i];
        }
    }
    for(let i = 0; i < height.length;i++){
        maxWater[i] = Math.min(maxRight[i],maxLeft[i]) - height[i];
        if(maxWater[i] > 0){
            water += maxWater[i];
        }
    }
    
    
    return water;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log("answer: " ,trap(height));
height = [4,2,0,3,2,5];
console.log("answer: " ,trap(height));
height = [4,2,3];
console.log("answer: " ,trap(height));


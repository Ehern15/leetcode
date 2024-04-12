/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let j = i + 1;
    let k = height.length - 1;
    let water = 0;
    while(i < height.length){
        //console.log(i,j);
        let count = 0;
        while(height[j] < height[i] && j < height.length){
            //console.log("j:",height[j]);
            count += (height[i] - height[j]);
            //console.log("count: ",count);
            j++;
        }
        //console.log("i:",height[i]);
        if(height[j]>=height[i]){
            water+=count;
            i = j;
            j = i + 1;
        }else{
            i++;
            j = i + 1;
        }
        
        //console.log("water: ", water);
        
    }
    return water;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log("answer: " ,trap(height));
height = [4,2,0,3,2,5];
console.log("answer: " ,trap(height));

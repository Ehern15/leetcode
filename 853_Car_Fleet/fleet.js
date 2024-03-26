/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    
    let cars = [];
    let arrival = [];

    for (let i = 0; i < position.length; i++) {
        arrival[i] = (target - position[i]) / speed[i];
    }

    for (let i = 0; i < position.length; i++) {
        let temp = []
        temp.push(position[i]);
        temp.push(arrival[i]);
        cars[i] = temp;
    }
    cars.sort((a, b) => b[0] - a[0]);
    let fleets = [];
    
    for (let i = 0; i < position.length; i++) {
        if(i == 0){
            fleets.push(cars[i][1]);
            continue;
        }
        if(cars[i][1] > fleets[fleets.length - 1]){
            fleets.push(cars[i][1]);
        }
    }
    return fleets.length;  
};

let target = 10, position = [3], speed = [3];
console.log(carFleet(target, position, speed));
target = 12, position = [10, 8, 0, 5, 3], speed = [2, 4, 1, 1, 3];
console.log(carFleet(target, position, speed));
target = 100, position = [0, 2, 4], speed = [4, 2, 1]
console.log(carFleet(target, position, speed));
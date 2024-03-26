/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {

    let cars = [];
    for (let i = 0; i < position.length; i++) {
        let temp = []
        temp.push(position[i]);
        temp.push((target - position[i]) / speed[i]);
        cars[i] = temp;
    }
    cars.sort((a, b) => b[0] - a[0]);
    let current = -1;
    let fleets = 0;
    for (let i = 0; i < position.length; i++) {
        if (current < cars[i][1]) {
            current = cars[i][1]
            fleets++;
        }
    }
    return fleets;
};

let target = 10, position = [3], speed = [3];
console.log(carFleet(target, position, speed));
target = 12, position = [10, 8, 0, 5, 3], speed = [2, 4, 1, 1, 3];
console.log(carFleet(target, position, speed));
target = 100, position = [0, 2, 4], speed = [4, 2, 1]
console.log(carFleet(target, position, speed));
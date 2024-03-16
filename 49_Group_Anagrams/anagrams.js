/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function (strs) {
    const map1 = new Map();
    let arrayEmpty = Array(26).fill(0);

    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            arrayEmpty[strs[i].charCodeAt(j) - 97]++;
        }

        hashkey = JSON.stringify(arrayEmpty);
        arrayEmpty.fill(0);
        let value = [];

        if (map1.has(hashkey)) {
            value = map1.get(hashkey);
        }
        value.push(strs[i]);
        map1.set(hashkey, value);

    }
    let solution = new Array();
    const buildSolution = (value) => solution.push(value);

    map1.forEach(buildSolution)

    return solution;

};


let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(input);
input = [""];
groupAnagrams(input);
input = ["a"];
groupAnagrams(input);

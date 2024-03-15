/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arrayEmpty = new Array(26);
    arrayEmpty.fill(0);
    if(s.length == t.length){
        for(let i = 0; i < s.length;i++){
            arrayEmpty[s.charCodeAt(i) - 97]++;
            arrayEmpty[t.charCodeAt(i) - 97]--;
        }
    }else{
        return false;
    }
    return arrayEmpty.every((currentValue) => currentValue == 0)

};
let s = "anagram", t = "nagaram";
isAnagram(s,t);
s = "rat", t = "car";
isAnagram(s,t);

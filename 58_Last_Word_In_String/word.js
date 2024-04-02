/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const regex = /\w/;
    let endIndex = -1;
    for(let i = s.length - 1;i >= 0;i--){
        if(regex.test(s.charAt(i)) && endIndex == -1){
            endIndex = i;
        }
        while(endIndex >-1){
            if(s.charAt(i) == ' '){
                return endIndex - i;
            }
            if(i == 0){
                return endIndex + 1;
            }
            i--;
        }
    }
    return endIndex;
};
let s = "Hello World"
console.log(lengthOfLastWord(s));
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s));
s = "luffy is still joyboy"
console.log(lengthOfLastWord(s));
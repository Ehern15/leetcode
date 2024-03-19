/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let string = new String(s);
    string = string.toLowerCase();
    string = string.replace(/[^a-z0-9]/g, '');

    for (let i = 0, j = string.length - 1; i < string.length; i++, j--) {
        if (!(string.charAt(i) == string.charAt(j))) {
            return false;
        }
    }
    return true;

};
//
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))
s = "race a car"
console.log(isPalindrome(s))
s = " "
console.log(isPalindrome(s))
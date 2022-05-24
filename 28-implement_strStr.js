/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of 
 * haystack.
 * 
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let i = 0;
 var strStr = function(haystack, needle) {
    if (haystack[i] === needle[0]) {
        for (let letter = 0; letter < needle.length; letter++) {
            for (let check = i; check < haystack.length; check++) {
                if (needle[letter] === haystack[check]) {
                }
            }
        }
        return console.log(i)
    } else if (i < haystack.length - 1) {
        i++
        strStr(haystack, needle)
    } else {
        return -1
    }
};

strStr("hello", "ll");
strStr("aaaaa", "bba");

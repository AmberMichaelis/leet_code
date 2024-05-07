/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 * Example 4:
 * Input: s = "{ { } [ ] [ [ [ ] ] ] }"
 * Output: true
 * 
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */
var parList = {
    '(': ')',
    '{': '}',
    '[': ']'
}

var isValid = function (s) {
    if (s.length % 2) return false
    let closers = []
    for (let i = 0; i < s.length; i++) {
        let inputPar = s[i]
        if (parList[inputPar] !== undefined) {
            closers.push(parList[inputPar])
        } else {
            if (inputPar === closers[closers.length - 1]) {
                closers.pop()
            } else {
                return false
            }
        }
    }
    return closers.length === 0;
};

/* Explanation:
 * Create an object with open parenthesis as the keys and closing parenthesis as the values, parList.
 * If there is an odd number of parenthesis in s, return false.
 * Create an empty array, closers.
 * Loop through s.
 * Set the current parenthesis equal to a variable, inputPar.
 * Check if inputPar is an open bracket by seeing if its value exists in parList.
 * If so, push the value (the closing bracket) into the closers array.
 * Otherwise, it is a closing bracket, so check if it matches the last closing bracket pushed into the closers array.
 * If so, remove it from the closers array.
 * Otherwise, return false.
 * After looping through all of s, return whether or not the closers array has a length of 0.
 */

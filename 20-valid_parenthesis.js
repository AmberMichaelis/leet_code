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

var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    } else {
        let openSymbols = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                openSymbols.push(s[i])
            } else if (openSymbols.length > 0) {
                if (s[i] === ')' && openSymbols[openSymbols.length - 1] === '(') {
                    openSymbols.pop(s[i])
                } else if (s[i] === '}' && openSymbols[openSymbols.length - 1] === '{') {
                    openSymbols.pop(s[i])
                } else if (s[i] === ']' && openSymbols[openSymbols.length - 1] === '[') {
                    openSymbols.pop(s[i])
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        return (openSymbols.length === 0)
    }
};

console.log(isValid('[')) // false
console.log(isValid('[]([]){}')) // true
console.log(isValid("([}}])")) // false
console.log(isValid("))")) // false

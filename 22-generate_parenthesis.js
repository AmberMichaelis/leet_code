/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *  
 * 
 * Constraints:
 * 1 <= n <= 8
 */
/**
 * @param {number} n
 * @return {string[]}
 */
 const generateParentheses = (n) => {
    const result = [];
    breathFirstSearch("", 0, 0);
    return result;
    function breathFirstSearch(str, left, right) {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left !== n) {
        breathFirstSearch(str + "(", left + 1, right);
      }
      if (left > right) {
        breathFirstSearch(str + ")", left, right + 1);
      }
    }
  }

  /* Explanation:
   * https://medium.com/@chyanpin/solving-leetcodes-challenge-22-generate-parentheses-2ba613397c06
   */ 

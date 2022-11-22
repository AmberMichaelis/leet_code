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
 var generateParenthesis = function(n) {
  var res = [];
  if (n < 1) return res;
  generate(res, '', n, n);
  return res;
};

var generate = function (res, str, ll, rr) {
  if (ll || rr) {
    if (rr > ll) generate(res, str + ')', ll, rr - 1);
    if (ll) generate(res, str + '(', ll - 1, rr);
  } else {
    res.push(str);
  }
};

  /* Explanation:
   * https://baffinlee.com/leetcode-javascript/problem/generate-parentheses.html
   */ 

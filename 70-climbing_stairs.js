/* You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 
 * Constraints:
 * 1 <= n <= 45
 * 
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n == 1 || n == 0) return 1 // base cases

    let first = 1; // num_ways(n-2)
    let second = 2; // num_ways(n-1)

    for (let i = 3; i <= n; i++) {

        // num_ways(n) = num_ways(n-2) + num_ways(n-1)
        let third = first + second;
        first = second;
        second = third;
    }
    return second;

};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(45)); // 1836311903

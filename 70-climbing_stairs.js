/* You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * Constraints:
 * 1 <= n <= 45
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 0 || n == 1) return 1

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;

};

/* Explanation:
 * The pattern for number of ways to climb to the top is:
 * {n : numOfWays,
 * 0 : 1,
 * 1 : 1,
 * 2 : 2,
 * 3 : 3,
 * 4 : 5,
 * 5 : 8,
 * 6 : 13,
 * etc.
 * }
 * The number of ways equals the sum of the previous two number of ways.
 * 
 * If n is 0 or 1, return 1.
 * Create a variable called first, equal to 1, which represents the number of ways if there is 1 stair.
 * Create a variable called second, equal to 2, which represents the number of ways if there are 2 stairs.
 * Create a for loop that starts with 3 (stairs) and increments until you've reached n number of stairs.
 * In the loop, create a variable called third that equals the sum of first and second.
 * Set first equal to second.
 * Set second equal to third.
 * Once the loop has ended, return second (since it is equal to third and third is out of scope).
 */

/**
 * Returns the k-th permutation sequence of numbers from 1 to n.
 * @param {number} n - The number of elements in the sequence.
 * @param {number} k - The index (1-based) of the permutation sequence to find.
 * @return {string} - The k-th permutation sequence as a string.
 */
var getPermutation = function(n, k) {
    // Generate a list of numbers from 1 to n
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    
    // Factorials array to store precomputed factorial values
    let fact = [1];
    for (let i = 1; i <= n; i++) {
        fact[i] = fact[i - 1] * i;
    }
    
    // Convert k to 0-based index
    k--;
    let result = "";
    
    // Construct the k-th permutation
    for (let i = n; i > 0; i--) {
        let index = Math.floor(k / fact[i - 1]); // Determine the index in the list
        result += numbers[index]; // Append the selected number
        numbers.splice(index, 1); // Remove used number
        k %= fact[i - 1]; // Update k for the next round
    }
    
    return result;
};

// Example usage:
console.log(getPermutation(3, 3)); // Output: "213"
console.log(getPermutation(4, 9)); // Output: "2314"

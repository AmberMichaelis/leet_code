// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    var s = '' + x;
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

// var isPalindrome = function(x) {
//     var digit;
//     var result = 0;
//     var y = x;
    
//     if (x < 0) return false;
    
//     while(y) {
//         digit = y % 10;
//         result = ( result * 10 ) + digit;
//         y = y/10|0
//     }
        
//     return (x == result);
    
// };

// var isPalindrome = function(x) {
//     // Base condition
//     if (x < 0) {
//         return false;
//     }
//     // Store the number in a variable
//     let number = x;
//     // This will store the reverse of the number
//     let reverse = 0;
//     while (number > 0) {
//         reverse = reverse * 10 + number % 10;
//         number = parseInt(number / 10);
//     }
//     return x === reverse;
// };

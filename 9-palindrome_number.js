var isPalindrome = function(x) {
    var digit;
    var result = 0;
    var y = x;
    
    if (x < 0) return false;
    
    while(y) {
        digit = y % 10;
        result = ( result * 10 ) + digit;
        y = y/10|0
    }
        
    return (x == result);
    
};

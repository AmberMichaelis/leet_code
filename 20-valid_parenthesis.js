// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// Input: s = "{ { } [ ] [ [ [ ] ] ] }"
// Output: true

var isValid = function (s) {
    if (s.length % 2 !== 0 ){
        return false
    } else {
        let openSymbols = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                openSymbols.push(s[i])
            } else if (s[i] === ')' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '(') {
                openSymbols.pop(s[i])
            } else if (s[i] === '}' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '{') {
                openSymbols.pop(s[i])
            } else if (s[i] === ']' && openSymbols.length !== 0 && openSymbols[openSymbols.length - 1] === '[') {
                openSymbols.pop(s[i])
            } else {
                return false
            }
        }
        return (openSymbols.length === 0)
    }
};

console.log(isValid('['))
console.log(isValid('[]([]){}'))



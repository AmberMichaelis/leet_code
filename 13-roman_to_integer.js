const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const romanValues = [1, 5, 10, 50, 100, 500, 1000]


var romanToInt = function (s) {
    var number = 0
    var array = s.split('');
    var newArray = []
        
        // converts s into array with values equivalent to roman numeral values
        for (let index in array)   {
            for (let each in romanLetters) {
                if (array[index] === romanLetters[each]) {
                    newArray.push(romanValues[each])
                }
            }
        }


        for (let i = 0; i < newArray.length; i++) {
            let currentLetter = newArray[i];
            let nextLetter = newArray[i + 1];
            
            if (currentLetter >= nextLetter || nextLetter == undefined) {
                number += currentLetter
            } else {
                number -= currentLetter
            }
        }
        return number
};

console.log(romanToInt('LVIIIX'))
console.log(romanToInt("I"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("X"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCI"))

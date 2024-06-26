class Solution:
    def intToRoman(self, num: int) -> str:
        # Define a list of tuples containing Roman numerals and their corresponding values
        val_to_roman = [
            (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
            (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
            (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
        ]
        
        # Initialize an empty result string
        result = ''
        
        # Loop through each value-roman pair
        for value, roman in val_to_roman:
            # While the current value can be subtracted from num
            while num >= value:
                # Append the Roman numeral to result
                result += roman
                # Subtract the value from num
                num -= value
        
        return result

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Initialize variables to store the minimum price so far and the maximum profit
        min_price = float('inf')
        max_profit = 0
        
        # Loop through each price in the list
        for price in prices:
            # Update the minimum price if the current price is lower
            if price < min_price:
                min_price = price
            # Calculate the potential profit at the current price
            current_profit = price - min_price
            # Update the maximum profit if the current potential profit is higher
            if current_profit > max_profit:
                max_profit = current_profit
        
        return max_profit

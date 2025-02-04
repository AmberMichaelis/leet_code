from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gas, current_gas, start_station = 0, 0, 0
        
        for i in range(len(gas)):
            total_gas += gas[i] - cost[i]
            current_gas += gas[i] - cost[i]
            
            # If current gas is negative, you can't continue from the current start
            if current_gas < 0:
                # Reset start station to the next one
                start_station = i + 1
                # Reset current gas for the new starting point
                current_gas = 0
        
        # If total gas is negative, it's impossible to complete the circuit
        return start_station if total_gas >= 0 else -1

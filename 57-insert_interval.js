/* You are given an array of non-overlapping intervals intervals where intervals[i] = [start_i, end_i] 
represent the start and the end of the ith interval and intervals is sorted in ascending order by start_i. 
You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by start_i and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by start_i in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
    const result = []
    if (intervals.length === 0) {
        return [newInterval]
    }
    const index = intervals.findIndex(([a]) => newInterval[0] <= a)
    if (index === -1) {
        intervals.push(newInterval)
    } else {
        intervals.splice(index, 0, newInterval)
    }
    result.push(intervals[0])
    let index2 = 1
    while (index2 <= intervals.length - 1) {
        const [a, b] = result[result.length - 1]
        const [c, d] = intervals[index2]
        if (a <= c && c <= b) {
            result[result.length - 1] = [a, Math.max(b, d)]
        } else {
            result.push(intervals[index2])
        }
        index2 += 1
    }
    return result
}

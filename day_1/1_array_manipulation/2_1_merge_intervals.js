// https://leetcode.com/problems/merge-intervals/description/

const merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a,b) => a[0] -b[0]);
    let outputArr = [intervals[0]];
    
    
    for (let i=1; i<intervals.length; i++) {
        const currIntvl = {
            start: intervals[i][0],
            end: intervals[i][1],
        }
        
        const lastIntvlIdx = outputArr.length-1;
        const lastIntvl = {
            start: outputArr[lastIntvlIdx][0],
            end: outputArr[lastIntvlIdx][1]
        }
        

        if (currIntvl.start <= lastIntvl.end && currIntvl.end > lastIntvl.end) outputArr[lastIntvlIdx][1] = currIntvl.end;
        if (currIntvl.start <= lastIntvl.end && currIntvl.end <= lastIntvl.end) continue;
        if (currIntvl.start > lastIntvl.end) outputArr.push(intervals[i]);
    }
    return outputArr;
};

// Time: O(n) where n is the length of intervals
// Space: // O(n) where n is the length of intervals
// https://leetcode.com/problems/combination-sum/

var combinationSum = function(candidates, target) {
    let res = [];

    const backtrack = function(i, cur, total) {
        if (total === target) {
            res.push([...cur]);
            return;
        }
        if (i >= candidates.length || total > target) return;

        cur.push(candidates[i]);
        backtrack(i, cur, total+candidates[i]);
        cur.pop();
        backtrack(i+1, cur, total);
    }

    backtrack(0,[],0);
    return res;
};
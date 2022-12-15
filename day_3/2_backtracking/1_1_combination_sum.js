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

// Time: O(n^(t/m+1)) where n = number of candidates, t = target value, m =minimal value among candidates. t/m+1 is max num of nodes
// Time: O(t/m) where n = number of candidates, t = target value, m =minimal value among candidates

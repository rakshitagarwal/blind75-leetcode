var combinationSum = function (candidates, target) {
  let result = [];
  function dfs(index, currentVal, arr) {
    if (currentVal < 0) return;
    if (currentVal === 0) result.push([...arr]);
    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      dfs(i, currentVal - candidates[i], arr);
      arr.pop();
    }
  }
  dfs(0, target, []);
  return result;
};

// example input: candidates = [2,3,6,7], target = 7
// output: [[2,2,3],[7]]

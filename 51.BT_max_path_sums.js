var maxPathSum = function (root) {
  let max = -Infinity;

  function dfs(root) {
    if (!root) return 0;

    let left = Math.max(0, dfs(root.left)); // Ignore negative paths
    let right = Math.max(0, dfs(root.right)); // Ignore negative paths

    const curMax = left + root.val + right;

    max = Math.max(curMax, max);

    return root.val + Math.max(left, right);
  }
  dfs(root);
  return max;
};

// example
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42

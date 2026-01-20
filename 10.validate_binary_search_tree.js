var isValidBST = function (root) {
  return traverse(root, null, null);
};

function traverse(root, min, max) {
  if (!root) {
    return true;
  }

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }

  return (
    traverse(root.left, min, root.val) && traverse(root.right, root.val, max)
  );
}

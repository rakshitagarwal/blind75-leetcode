var isSameTree = function (p, q) {
  const hasSameValue = p !== null && q !== null && p.val === q.val;
  const hasSameTree =
    hasSameValue && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  return (p === null && q === null) || hasSameTree;
};

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  p = [1,2,3], q = [1,2,3]
var isSameTree = function (p, q) {
  //base cases
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
};

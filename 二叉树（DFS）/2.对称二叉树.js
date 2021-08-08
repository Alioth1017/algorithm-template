/** 
判断一个二叉树是对称的，比如说：
二叉树 [1,2,2,3,4,4,3] 是对称的。
     1
    / \
   2   2
  / \ / \
 3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3

思路：
递归解决：
判断两个指针当前节点值是否相等
判断 A 的右子树与 B 的左子树是否对称
判断 A 的左子树与 B 的右子树是否对称

 */

function isSame(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) return true;
  if (leftNode === null || rightNode === null) return false;
  return (
    leftNode.val === rightNode.val &&
    isSame(leftNode.left, rightNode.right) &&
    isSame(leftNode.right, rightNode.left)
  );
}
var isSymmetric = function (root) {
  if (!root) return root;
  return isSame(root.left, root.right);
};

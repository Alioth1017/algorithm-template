/** 
掌握二叉树遍历的套路
只要遍历到这个节点既没有左子树，又没有右子树的时候
说明就到底部了，这个时候如果之前记录了深度，就可以比较是否比之前记录的深度大，大就更新深度
然后以此类推，一直比较到深度最大的
 */
var maxDepth = function (root) {
  if (!root) return root;
  let ret = 1;
  function dfs(root, depth) {
    if (!root.left && !root.right) ret = Math.max(ret, depth);
    if (root.left) dfs(root.left, depth + 1);
    if (root.right) dfs(root.right, depth + 1);
  }
  dfs(root, ret);
  return ret;
};

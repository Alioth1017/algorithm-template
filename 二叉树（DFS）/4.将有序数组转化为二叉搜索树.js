/** 
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

示例 1：
     0
    / \
  -3  9
  /  /
-10 5
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

示例 2：
    3 1
   /   \
  1     3
输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。

提示：
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 按 严格递增 顺序排列


思路：
构建一颗树包括：构建root、构建 root.left 和 root.right
题目要求"高度平衡" — 构建 root 时候，选择数组的中间元素作为 root 节点值，即可保持平衡。
递归函数可以传递数组，也可以传递指针，选择传递指针的时候：l r 分别代表参与构建BST的数组的首尾索引。
 */

var sortedArrayToBST = function (nums) {
  return toBST(nums, 0, nums.length - 1);
};
const toBST = function (nums, l, r) {
  if (l > r) {
    return null;
  }
  const mid = (l + r) >> 1;
  const root = new TreeNode(nums[mid]);
  root.left = toBST(nums, l, mid - 1);
  root.right = toBST(nums, mid + 1, r);

  return root;
};

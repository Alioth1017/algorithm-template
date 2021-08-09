/** 
题目描述如下：
给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

解决思路：
我们遍历数组时，经过数组中的每一项就往map中添加，比如[1,2,3,1]
第一项：遍历到第一个1时，对象返回{ 1: 1 },代表1出现1次
第二项：遍历到2时，返回 { 1: 1, 2: 1 }
第三项：遍历到3时，返回 { 1: 1, 2: 1， 3: 1 }
第四项：遍历到第二个1时，发现原来的对象里已经有1了，返回false
 */

const containsDuplicate = function (nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      return true;
    } else {
      map.set(i, 1);
    }
  }
  return false;
};

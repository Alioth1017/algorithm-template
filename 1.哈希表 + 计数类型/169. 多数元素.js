/** 
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：[3,2,3]
输出：3

示例 2：
输入：[2,2,1,1,1,2,2]
输出：2

思路：
声明一个计数器,也就是一个对象const map = {}
遍历字符串，开始记数，如果字符串的字母第一次碰见，map[第一次碰见的字母] = 1
如果map已经记录过这个字母，则map[记录过的的字母] += 1
在遍历的过程中，看map[记录过的的字母] 是否大于 数组总长度/2
 */

var majorityElement = function (nums) {
  const map = {};
  const n = nums.length >> 1; // >>是右移运算符，意思是除以2
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] !== undefined ? map[nums[i]] + 1 : 1;
    if (map[nums[i]] > n) return nums[i];
  }
};

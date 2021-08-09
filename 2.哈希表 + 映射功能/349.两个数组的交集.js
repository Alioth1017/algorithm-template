/**
给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

说明：
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
 */

/** 
解法1：:用set，很简单,但是空间复杂度和时间复杂度都太高，不太优雅
 */
var intersection = function (nums1, nums2) {
  return (result = [...new Set(nums1)].filter((item) =>
    new Set(nums2).has(item)
  ));
};

/** 
解法2：用map来做，时间和空间复杂度都低很多
用一个map去存nums1数组里的每一项，类似map[nums1[i]] = true
然后去遍历nums2，如果在map中已经有的值，类似map[nums2[i]], 就把它push到一个数组里
并且将map[nums2[i]]设为false，后面有相同的值就不push到数组了
 */
var intersection = function (nums1, nums2) {
  const map = {};
  const ret = [];
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      ret.push(nums2[i]);
      map[nums2[i]] = false;
    }
  }
  return ret;
};

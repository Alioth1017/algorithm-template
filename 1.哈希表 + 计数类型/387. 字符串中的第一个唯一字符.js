/** 
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：
s = "leetcode"
返回 0

s = "loveleetcode"
返回 2

// 提示：你可以假定该字符串只包含小写字母

思路：
遍历字符串
用一个对象{}来记数，出现过一次就+1，
遍历完毕，再次遍历字符串，看它们在之前记录的对象里的值，是否是1，是就返回下标，不是返回-1。

 */

var firstUniqChar = function (s) {
  const map = {};
  for (let v of s) map[v] = (map[v] || 0) + 1;
  for (let i = 0; i < s.length; i++) if (map[s[i]] === 1) return i;
  return -1;
};

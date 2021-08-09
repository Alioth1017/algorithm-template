/** 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false

思路：这个题一看字眼，出现次数相同，次数不就是记数吗，记数题型，map走起！
声明计数器，一个对象 const obj = {}
遍历s字符串，如果遍历到字符串的'a'字母，去看obj[a]是否存在
不存在说明第一次遍历到'a'字母，那么初始化obj[a] = 1
如果存在则obj[a] += 1
t字符串同理，它每次减1
遍历完s字符串后，遍历obj对象，看它的每一对key：value，是否value都是0
*/

var isAnagram = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen !== tLen) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < sLen; i++) {
    const currentS = s[i];
    const currentT = t[i];
    obj[currentS] ? obj[currentS]++ : (obj[currentS] = 1);
    obj[currentT] ? obj[currentT]-- : (obj[currentT] = -1);
  }
  return Object.values(obj).every((v) => v === 0);
};

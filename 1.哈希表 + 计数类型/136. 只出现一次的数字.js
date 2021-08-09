/** 
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,1]
输出: 1

示例 2:
输入: [4,1,2,1,2]
输出: 4

思路1：用map记录一遍，类似这样的代码
const countMap = {};
数组.forEach((item)=> { countMap[item] ? countMap[item] += 1 : countMap[item] = 1 } )
最后再遍历一次countMap，然后看谁的次数是`1`，就解决了

思路2：用异或运算符
异或运算符(^)，我们了解下，这个运算符的功能
任何数和自己做异或运算，结果为 0，即 a⊕a=0。
任何数和 0 做异或运算，结果还是自己，即 a⊕0=a。
异或运算中，满足交换律和结合律，也就是a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。
所以出现两次的字母异或运算得0，跟出现一次的字母异或运算得到自己

 */

var singleNumber = function (nums) {
  let init = nums[0];
  for (let i = 1; i < nums.length; i++) {
    init ^= nums[i];
  }
  return init;
};

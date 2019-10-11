/**
 * 459
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 */
// \1 表示模式重复
export default (str) => {
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}

// https://www.nowcoder.com/discuss/49349
// 1. 二维数组中（左右递增、上下递增），找出是否存在某个数
function Find(target, array) {
  let rowLength = array.length
  let colLength = rowLength.length
  let i = rowLength
  let j = 0
  for (; i >= 0 && j < colLength; ) {
    if (target === array[i][j]) {
      return true
    } else if (target > array[i][j]) {
      j++
      continue
    } else if (target < array[i][j]) {
      i--
      continue
    }
  }
  return false
}
// 2 字符串空格替换为 %20
function replaceSpace(str) {
  return str.replace(/\s/, "%20")
}

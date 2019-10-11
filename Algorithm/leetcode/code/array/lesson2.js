
/**
 * 
 */
export default (arr) => {
  // [1,2,3,4,4,3,2,1]
  // 对这副牌进行排序，升序、降序都可以
  arr.sort((a, b) => a - b)
  // [1, 1, 2, 2, 3, 3, 4, 4]
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  // len = 8
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i])
    // j < 7
    for (let j = i + 1; j < len - 1; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        // 不同分组的最小长度
        if (min > tmp.length) {
          min = tmp.length
        }
        // [1, 1]
        dst.push([].concat(tmp))
        // 清空 tmp
        tmp.length = 0
        // 2
        i = j
        break
      }
    }
  }
  console.log(dst, min)
  // [1,2,3,4,4,3,2,1] -> [ [ 1, 1 ], [ 2 ], [ 3 ] ] 1
  // [1,1,1,2,2,2,3,3] -> [ [ 1, 1, 1 ], [ 2, 2 ] ] 2
  // [1,1,2,2,2,2] -> [ [ 1, 1 ] ] 2
  dst.every(item => {
    if (item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
}

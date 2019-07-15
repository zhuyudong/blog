/**
 * 给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。
 * 否则,返回false。例如，数组[3,5,1,4]和 sum = 9，函数应该返回true，因为4 + 5 = 9。
 */
const array = [3, 5, 1, 4]
/* method 1 */
function findSum1(arr, sum) {
  return arr.some((i, ix, ar) => ar.some(j => j !== i && sum === j + i))
}
console.time("time1")
console.log(findSum1(array, 10))
console.timeEnd("time1")

/* method 2 */
function findSum2(arr, sum) {
  const set = new Set()
  set.add(sum - arr[0])
  for (let i = 1, len = arr.length; i < len; i++) {
    if (set.has(arr[i])) return true
    set.add(sum - arr[i])
  }
  return false
}
console.time("time2")
console.log(findSum2(array, 10))
console.timeEnd("time2")

/* method 3 */
function findSum3(arr, sum) {
  // set 初始为空 Set，n 从arr[0]开始
  return arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set()))
}
console.time("time3")
console.log(findSum3(array, 10))
console.timeEnd("time3")

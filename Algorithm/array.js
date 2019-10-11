// 把数组排成最小的数
function printMinNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return ""
  }
  console.log(
    [3, 32, 321].sort(), // [ 3, 32, 321 ]
    [3, 32, 321].sort(compare), // [ 321, 32, 3 ]
    [3, 32, 321].sort((a, b) => a - b) // [ 3, 32, 321 ]
  )
  return numbers.sort(compare).join("")
}
function compare(a, b) {
  const front = "" + a + b
  const behind = "" + b + a
  return front - behind
}
// console.log(printMinNumber([3, 32, 321])) // -> 321323

// 第一个只出现一次的字符
function firstNotRepeatingChar(str) {
  if (!str) {
    return -1
  }
  let countMap = {}
  const array = str.split("")
  const length = array.length
  for (let i = 0; i < length; i++) {
    const current = array[i]
    const count = countMap[current]
    if (count) {
      countMap[current] = count + 1
    } else {
      countMap[current] = 1
    }
  }
  for (let i = 0; i < length; i++) {
    if (countMap[array[i]] === 1) {
      return i
    }
  }
  return -1
}

// 调整数组顺序使奇数位于偶数的前面

// 构建乘积数组

// 和为S的连续正整数序列

// 和为S的两个数字

// 连续子数组的最大和

// 两数之和

// 扑克牌顺子

// 三数之和

// 数组中出现次数超过数组长度一半的数字

// 数组中的逆序对

// 顺时针打印矩阵

// 四数之和

// 在排序数组中查找数字

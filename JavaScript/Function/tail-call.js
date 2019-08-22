// 尾调用：函数的最后一步是调用另一个函数
// 只有Safari支持尾调用优化
/*
function f1(x) {
  return g(x)
}
function f2(x) {
  if (x > 0) {
    return m(x)
  }
  return g(x)
}
// 以下非尾调用
function f3(x) {
  // 赋值
  let y = g(x)
  return y
}
function f4(x) {
  // 数学运算
  return g(x) + 1
}
function f5(x) {
  g(x)
  // 等同于
  // g(x)
  // return undefined
}
//*/

// 尾递归
// 需保存n个调用记录，复杂度 O(n)
/*
function factorial(n) {
  if (n === 1) return 1
  return n * factorial(n - 1)
}
console.log(factorial(5))
//*/
// 只保留一个调用记录 O(1)
/*
function factorial(n, total) {
  if (n === 1) return total
  console.log(total)
  return factorial(n - 1, n * total)
}
console.log(factorial(5, 1))
//*/
// function fibonacci(n) {
//   if (n <= 1) return 1
//   return fibonacci(n - 1) * fibonacci(n - 2)
// }
function fibonacci(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) return ac2
  return fibonacci(n - 1, ac2, ac1 + ac2)
}
console.log(fibonacci(1000))

function tailFactorial(n, total) {
  if (n === 1) return total
  return tailFactorial(n - 1, n * total)
}
function factorial(n) {
  return tailFactorial(n, 1)
}

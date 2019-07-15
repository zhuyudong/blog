// https://github.com/mqyqingfeng/Blog/issues/41

// 浏览器控制台
console.log(+0 === -0) // => true
console.log(0 === +0) // => true
console.log(0 === -0) // => true
console.log((-0).toString()) // => "0"
console.log((+0).toString()) // => "0"

// 因为JS采用IEEE_754浮点数表示法，最高位为符号位（0 - 正，1 - 负），所以有+0、-0
console.log(Math.round(-0.1)) // => -0

console.log(1 / +0 === 1 / -0) // => false
console.log(NaN === NaN) // => false

function equal(a, b) {
  // 区分a、b不为 +0 或 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b
  if (a === null || b === null) return false
  // 区分 NaN，让NaN === NaN
  if (a !== a) return b !== b
  const type = typeof a
  if (type !== "object" && type !== "function" && typeof b !== "object")
    return false
  return deepEqual(a, b)
}

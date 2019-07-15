const num = 1
const str = "str"
const bool = true
const sym = Symbol()
const und = undefined
const nul = null
const arr = []
const obj = {}
const func = function() {}
const err = new Error()
const reg = /\d/
const date = new Date()
/**
 * typeof 只探测出6种类型 number、string、boolean、object、undefined、symbol、function
 */
/*
console.log(typeof num) // => number
console.log(typeof str) // => string
console.log(typeof bool) // => boolean
console.log(typeof sym) // => symbol
console.log(typeof und) // => undefined
console.log(typeof nul) // => object
console.log(typeof arr) // => object
console.log(typeof obj) // => object
console.log(typeof func) // => function
console.log(typeof reg) // => object
console.log(typeof date) // => object
console.log(typeof err) // => object
//*/

/**
 * Object.prototype.toString 能探测出14种类型
 */
console.log(Object.prototype.toString.call(num)) // => [object Number]
console.log(Object.prototype.toString.call(str)) // => [object String]
console.log(Object.prototype.toString.call(bool)) // => [object Boolean]
console.log(Object.prototype.toString.call(sym)) // => [object Symbol]
console.log(Object.prototype.toString.call(und)) // => [object Undefined]
console.log(Object.prototype.toString.call(nul)) // => [object Null]
console.log(Object.prototype.toString.call(arr)) // => [object Array]
console.log(Object.prototype.toString.call(func)) // => [object Function]
console.log(Object.prototype.toString.call(reg)) // => [object RegExp]
console.log(Object.prototype.toString.call(date)) // => [object Date]
console.log(Object.prototype.toString.call(err)) // => [object Error]
console.log(Object.prototype.toString.call(Math)) // => [object Math]
console.log(Object.prototype.toString.call(JSON)) // => [object JSON]
function func1() {
  console.log(Object.prototype.toString.call(arguments)) // => [object Arguments]
}
func1()

const classType = {}
"Boolean Number String Function Array Date RegExp Object Error"
  .split(" ")
  .forEach(item => {
    classType[`[object ${item}]`] = item.toLowerCase()
  })
function type(obj) {
  if (obj == null) {
    return `${obj}`
  }
  return /^object|function$/.test(typeof obj)
    ? classType[Object.prototype.toString.call(obj)] || "object"
    : typeof obj
}

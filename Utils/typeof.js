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

const toString = Object.prototype.toString
/**
 * Object.prototype.toString 能探测出14种类型
 */
console.log(toString.call(num)) // => [object Number]
console.log(toString.call(str)) // => [object String]
console.log(toString.call(bool)) // => [object Boolean]
console.log(toString.call(sym)) // => [object Symbol]
console.log(toString.call(und)) // => [object Undefined]
console.log(toString.call(nul)) // => [object Null]
console.log(toString.call(arr)) // => [object Array]
console.log(toString.call(func)) // => [object Function]
console.log(toString.call(reg)) // => [object RegExp]
console.log(toString.call(date)) // => [object Date]
console.log(toString.call(err)) // => [object Error]
console.log(toString.call(Math)) // => [object Math]
console.log(toString.call(JSON)) // => [object JSON]
function func1() {
  console.log(toString.call(arguments)) // => [object Arguments]
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
    ? classType[toString.call(obj)] || "object"
    : typeof obj
}

// https://github.com/feross/is-buffer/blob/master/index.js
function isBuffer(obj) {
  return (
    obj !== null &&
    obj.constructor !== null &&
    typeof obj.constructor.isBuffer === "function" &&
    obj.constructor.isBuffer(obj)
  )
}

// https://github.com/axios/axios/blob/master/lib/utils.js
function isString(val) {
  return typeof val === "string"
}
function isNumber(val) {
  return typeof val === "number"
}
function isUndefined(val) {
  return typeof val === "undefined"
}
function isObject(val) {
  return val !== null && typeof val === "object"
}
function isArray(val) {
  return toString.call(val) === "[object Array]" || Array.isArray(obj)
}
function isDate(val) {
  return toString.call(val) === "[object Date]"
}
function isFile(val) {
  return toString.call(val) === "[object File]"
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]"
}
function isFunction(val) {
  return toString.call(val) === "[object Function]"
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe)
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]"
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData
}
function isPlainObject(val) {
  return toString.call(val) === "[object Object]"
}
function isURLSearchParams(val) {
  return (
    typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams
  )
}
function isArrayBufferView(val) {
  let result
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val)
  } else {
    result = val && val.buffer && val.buffer instanceof ArraryBuffer
  }
  return result
}

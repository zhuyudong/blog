/* 浅拷贝 */
// 只拷贝对象和数据的引用
const arr = [1, true, null, undefined, "string", { w: 1 }]
const arr1 = arr.slice()
const arr2 = arr.concat()
arr1[0] = 2
arr1[5].w = 2
arr2[0] = 3
arr1[5].w = 3
console.log(arr) // => [1, true, null, undefined, "string", {w: 3}]
console.log(arr1) // => [2, true, null, undefined, "string", {w: 3}]
console.log(arr2) // => [3, true, null, undefined, "string", {w: 3}]
/* 深拷贝 */
// 1. JSON.parse(JSON.stringify()) 缺点：无法拷贝函数
const arr3 = [
  1,
  true,
  null,
  undefined,
  "string",
  { w: 1 },
  ["array"],
  function func1() {
    console.log(a)
  },
  {
    func2: function() {
      console.log(b)
    }
  }
]
const arr4 = JSON.parse(JSON.stringify(arr3))
arr4[5].w = 2
arr4[6][0] = "array1"
console.log(arr3) // => [ 1, true, null, undefined, 'string', { w: 1 }, [ 'array' ], [Function: func1], {func2: [Function: func2]} ]
console.log(arr4) // => [ 1, true, null, undefined, 'string', { w: 2 }, [ 'array1' ], null, {} ]

function shallowCopy(obj) {
  if (typeof obj !== "object") return obj
  const newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

function deepCopy(obj) {
  if (typeof obj !== "object") return obj
  const newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}

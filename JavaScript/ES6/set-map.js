// set 对 数字、字符、null、undefined 都能做到唯一存储
const set1 = new Set()
;[1, 3, 4, 3, 5, 6].forEach(i => set1.add(i))
console.log([...set1], set1.size) // -> [ 1, 3, 4, 5, 6 ] 5
for (let i of set1) {
  console.log(i)
}
const set2 = new Set()
;["s", "s", "t"].forEach(i => set2.add(i))
for (let i of set2) {
  console.log(i)
}
const set3 = new Set()
;[true, false, true].forEach(i => set3.add(i))
for (let i of set3) {
  console.log(i)
}
const set4 = new Set()
;[undefined, null, null, undefined].forEach(i => set4.add(i))
for (let i of set4) {
  console.log(i)
}
// 批量添加
const set5 = new Set([
  1,
  1,
  "s",
  "s",
  true,
  true,
  null,
  undefined,
  null,
  undefined
])
console.log([...set5], set5.size) // -> [ 1, 's', true, null, undefined ] 5

/* 去重 */
// 1
console.log([...new Set([1, 1, 2, 2, 3, 3])]) // -> [1, 2, 3]
// 2
function dequpe(array) {
  return Array.from(new Set(array))
}
console.log(dequpe([1, 1, 2, 2, 3, 3])) // -> [1, 2, 3]
/**重点**/
console.log([...new Set("aabbcc")].join("")) // -> abc
// set 内部认为 NaN === NaN
console.log([...new Set([NaN, NaN])], NaN === NaN) // -> NaN false

const set = new Set()
console.log(
  Object.getOwnPropertyNames(Set), // -> [ 'length', 'name', 'prototype' ]
  Object.getOwnPropertyNames(Set.prototype), // -> ['constructor', 'has', 'add', 'delete', 'clear', 'entries', 'forEach', 'size', 'keys', 'values']
  Object.getOwnPropertyNames(set), // -> []
  // 实例指向其构造函数的 prototype 对象
  Object.getOwnPropertyNames(set.__proto__) // -> ['constructor', 'has', 'add', 'delete', 'clear', 'entries', 'forEach', 'size', 'keys', 'values']
)

// 配合数组使用
const set6 = new Set([1, 2, 3, 4, 5])
// 将类数组转换为数组
console.log(Array.from(set6)) // -> [ 1, 2, 3, 4, 5 ]

/**
 * add(value): Set 可用链式写法
 * delete(value): boolean
 * has(value): boolean
 * clear(): void
 * keys(): Array<any>
 * values(): Array<any>
 * entries(): Array<any, any>
 * forEach(): void
 */
const set7 = new Set(["red", "green", "yellow"])
for (let i of set7.entries()) {
  console.log(i) // -> [ 'red', 'red' ] [ green', 'green' ] [ yellow', 'yellow' ]
}
const set8 = new Set([{ w: 1 }, { w: 2 }, { w: 1 }])
// console.log(set8.keys())
// console.log(set8.values())
for (let i of set8.keys()) {
  console.log(i) // -> { w: 1 } { w: 2 } { w: 1 }
}
for (let i of set8.values()) {
  console.log(i) // -> { w: 1 } { w: 2 } { w: 1 }
}
for (let i of set8.entries()) {
  console.log(i) // -> [ { w: 1 }, { w: 1 } ] [ { w: 2 }, { w: 2 } ] [ { w: 1 }, { w: 1 } ]
}

/**重点**/
// 遍历器接口
Set.prototype[Symbol.Iterator] === Set.prototype.values
set[Symbol.iterator] === set.values()

function union(a, b) {
  return new Set([...a, ...b])
}
function intersect(a, b) {
  return new Set([...a].filter(i => b.has(i)))
}
function difference(a, b) {
  return new Set([...a].filter(i => !b.has(i)))
}

// 改变原有数据
let set9 = new Set([1, 2, 3])
set9 = new Set(Array.from(set9, val => val * 2))
console.log(set9) // -> Set { 2, 4, 6 }

/**
 * 思考：
 * 1. set 内部如何存储，Same-value-zero equality
 * 2. 如何存储字符串
 */

/* Map */
/**
 * NaN、基本类型严格相等都会被当成一个健
 * null、undefined是两个健
 */
const map = new Map()
console.log(
  Object.getOwnPropertyNames(Map), // -> [ 'length', 'name', 'prototype' ]
  Object.getOwnPropertyNames(Map.prototype), // -> ['constructor', 'get', 'set', 'has', 'delete', 'clear', 'entries', 'size', 'forEach', 'keys', 'values']
  Object.getOwnPropertyNames(map), // -> []
  Object.getOwnPropertyNames(map.__proto__), // -> ['constructor', 'get', 'set', 'has', 'delete', 'clear', 'entries', 'size', 'forEach', 'keys', 'values']
  Object.getOwnPropertyNames(Object.getPrototypeOf(map)) // -> ['constructor', 'get', 'set', 'has', 'delete', 'clear', 'entries', 'size', 'forEach', 'keys', 'values']
)

/**
 * Map 方法
 * set(key: any, value: any): Map
 * get(val: any): any
 * delete(val: any): boolean
 * clear(): void
 * has(): boolean
 * keys(): Array<any>
 * values(): Array<any>
 * entries(): Array<any>
 * forEach(): void
 */

// 遍历器接口
Map.prototype[Symbol.iterator] === Map.prototype.entries
map[Symbol.iterator] === map.entries

// 转换为数组
const map1 = new Map([
  [1, 2],
  ["k", "v"],
  [null, undefined],
  [{ w: 1 }, { t: 2 }],
  [[1], [2]]
])
console.log([...map1])
/**
[
  [ 1, 2 ],
  [ 'k', 'v' ],
  [ null, undefined ],
  [ { w: 1 }, { t: 2 } ],
  [ [ 1 ], [ 2 ] ]
]
 */
console.log([...map1.keys()]) // -> [ 1, 'k', null, { w: 1 }, [ 1 ] ]
console.log([...map1.values()]) // -> [ 2, 'v', undefined, { t: 2 }, [ 2 ] ]
console.log([...map1.entries()])
/*
[
  [ 1, 2 ],
  [ 'k', 'v' ],
  [ null, undefined ],
  [ { w: 1 }, { t: 2 } ],
  [ [ 1 ], [ 2 ] ]
]
*/

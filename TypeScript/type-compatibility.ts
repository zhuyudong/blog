/* 类型兼容 */

let x1 = (a: number) => 0
let y1 = (b: number, s: string) => 0
x1 = y1
y1 = x1

let x2 = () => ({ name: "Alice" })
let y2 = () => ({ name: "Alice", location: "Seattle" })
x2 = y2
y2 = x2

/* 函数参数双向协定 */

/* 类只会比较实例成员，静态成员和构造函数不在比较范围内 */
class Animal {
  feet: number
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number
  constructor(numFeet: number) {}
}
let a: Animal
let s: Size
a = s
s = a

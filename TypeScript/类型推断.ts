// 定义变量
let type1 = 123
let type2 = 'hello'
// type1 = type2 error TS2322: Type 'string' is not assignable to type 'number'.
// 函数返回类型
function add(a : number, b : number) {
  return a + b
}

// 赋值
type Adder = (a : number, b : number) => number
let obj1 : Adder = (a, b) => {
  // a = 'hello' 不能将类型“ "hello" ”分配给类型“number”
  return a + b
}
function iTakeAnAdder(adder : Adder) {
  return adder(1, 2)
}
iTakeAnAdder((a, b) => {
  // a = 'hello' error TS2322 : Type '"hello"' is not assignable to type 'number'.
  return a + b
})

// 结构化
const obj2 = {
  a: 123,
  b: 456
}
// obj2.a = 'hello' error TS2322 : Type '"hello"' is not assignable to type
// 'number'.
const arr2 = [1, 2, 3]
// arr2[0] = 'hello' error TS2322 : Type '"hello"' is not assignable to type
// 'number'. 解构
const obj3 = {
  a: 123,
  b: 456
}
let {a} = obj3
// a = 'hello' // Error：不能把 'string' 类型赋值给 'number' 类型
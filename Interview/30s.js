// https://github.com/lydiahallie/javascript-questions/blob/master/README-zh_CN.md
/* 1
import { func1 } from '../JavaScript/src/moduleB';
import { func1 } from '../JavaScript/src/moduleB';
import { func1 } from '../JavaScript/src/moduleB';
function sayHi() {
  console.log(name) // -> undefined
  console.log(age) // ReferenceError: age is not defined
  var name = 'Lydia'
  let age = 21
}
sayHi()
//*/

/* 2
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1) // -> 2 2 2
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1) // => 0 1 2
}
//*/

/* 3
const shape = {
  radius: 10,
  diameter() {
    return console.log(this.radius * 2)
  },
  perimeter: () => console.log(2 * Math.PI * this.radius)
}
shape.diameter() // -> 20
shape.perimeter() // -> NaN
//*/

/* 4
console.log(+true) // -> 1
console.log(!"Lydia") // -> false
//*/

/* 5
const bird = {
  size: 'small'
}
const mouse = {
  name: 'Mickey',
  small: true
}
// mouse.bird.size 无效
// mouse[bird.size] 有效
// mouse[bird["size"]] 有效
//*/

/* 6
let c = { greeting: 'Hey!' }
let d
d = c
c.greeting = 'hello'
console.log(d.greeting) // -> "hello"
//*/

/* 7
let a = 3
let b = new Number(3)
let c = 3
console.log(a == b) // -> true
console.log(a === b) // -> false
console.log(b === c) // -> false
//*/

/* 8
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }
  constructor({newColor = 'green'} = {}) {
    this.newColor = newColor
  }
}
const fredie = new Chameleon({ newColor: 'purple' })
fredie.colorChange('orange') // -> TypeError: fredie.colorChange is not a function
//*/

/* 9
let greeting
greeting = {}
console.log(greeting) // -> {}
//*/

/* 10
function bark() {
  console.log('Woof!')
}
// 正常运行
bark.animal = 'dog'
//*/

/* 11
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
const member = new Person('Lydia', 'Hallie')
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
Person.prototype.getFullName1 = function () {
  return `${this.firstName} ${this.lastName}`
}
console.log(member.getFullName1()) // -> Lydia Hallie
console.log(member.getFullName()) // -> TypeError: member.getFullName is not a function
//*/

/* 12 **
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
// this 指向lydia
const lydia = new Person('Lydia', 'Hallie')
// 未使用new，this 指向 window， 故 sarah 为 undefined
const sarah = Person('Sarah', 'Simith')
console.log(lydia) // -> Person { firstName: 'Lydia', lastName: 'Hallie' }
console.log(sarah) // -> undefined
//*/

/* 13
事件传播的3个阶段：
Capturing -> Target -> Bubbling
//*/

/* 14
所有对象都有原型 ❌
基本对象没有，即 Object.prototype.__proto__ === null
//*/

/* 15
function sum (a, b) {
  return console.log(a + b)
}
// 隐式类型转换（implicit type coercion）
sum (1, '2') // -> "12"
//*/

/* 16
let number = 0
console.log(number++) // -> 0
console.log(++number) // -> 2
console.log(number) // -> 2
//*/

/* 17 **
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}
const person = 'Lydia'
const age = 21
// 标记模板字面量
getPersonInfo`${person} is ${age} years old` // -> [ '', ' is ', ' years old' ] "Lydia" 21
//*/

/* 18
function checkAge(data) {
  if (data === {age: 18}) {
    console.log('You are an adult!')
  } else if (data == {age: 18}) {
    console.log('You are still an adult.')
  } else {
    console.log(`Hmm.. You don't have an age I guess`)
  }
}
checkAge({ age: 18 }) // -> Hmm.. You don't have an age I guess
//*/

/* 19
function getAge(...args) {
  console.log(typeof args)
}
getAge(21) // -> "object"
//*/

/* 20
function getAge() {
  'use strict'
  age = 21
  console.log(age)
}
getAge() // -> ReferenceError: age is not defined
//*/

/* 21
// webpack 打包出的代码即是这样被 eval 包裹
const sum = eval('10*10+5')
console.log(sum) // -> 105
//*/

/* 22 **
// 用户关闭标签页时即失效
sessionStorage.setItem('cool_secret', 123)
//*/

/* 23
var num = 8
var num = 10
// 如和下面一起执行，这里也不会有输出（编译阶段即出错）
console.log(num) // -> 10
let num1 = 8
let num1 = 10
console.log(num1) // -> SyntaxError: Indentifier "num1" has already been declared
//*/

/* 24 **
const obj = {1: 'a', 2: 'b', 3: 'c'}
const set = new Set([1, 2, 3, 4, 5])
// 所有对象的键在底层都是字符串
console.log(obj.hasOwnProperty('1')) // -> true
console.log(obj.hasOwnProperty(1)) // -> true
console.log(set.has('1')) // -> false
console.log(set.has(1)) // -> true
//*/

/* 25
const obj = {a: 'one', b: 'two', a: 'three'}
console.log(obj) // -> { a: 'three', b: 'two' }
//*/

/* 26
JS 全局执行上下文做了两件事：全局对象和 this ✅
//*/

/* 27
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}
// -> 1 2 4
//*/

/* 28
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}
const name = 'Lydia'
name.giveLydiaPizza() // -> 'Just give Lydia pizza already!'
//*/

/* 29
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }
// 相当于 a['[object Object]'] = 123
a[b] = 123
// 相当于 a['[object Object]'] = 456
a[c] = 456
console.log(a[b]) // -> 456
//*/

/* 30
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')
bar()
foo()
bar()
// First Third Second
//*/

/* 31
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
// 点击button时 event.target 是button，可通过 event.stopPropagation() 停止冒泡
//*/

/* 32
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    click here!
  </p>
</div>
// 默认事件处理在冒泡阶段执行，除非将 useCapture设为true
// 点击p时输出 p div
//*/

/* 33
const person = { name: 'Lydia' }
function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}
sayHi.call(person, 21) // -> "Lydia is 21"
sayHi.bind(person, 21) // function
//*/

/* 34
function sayHi() {
  return (() => 0)()
}
console.log(typeof sayHi()) // -> number
//*/

/* 35
0
new Number(0)
('')
(' ')
new Boolean(false)
undefined
// 所有falsy值包括 0 false '' undefined null NaN
// 属于 falsy 的包括 0 ('') undefined
//*/

/* 36
console.log(typeof typeof 1) // -> "string"
//*/

/* 37
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers) // -> [ 1, 2, 3, <7 empty items>, 11 ]
//*/

/* 38 **
(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
// 1 undefined 2
//*/

/* 39
JS 中一切都是基本类型和对象
//*/

/* 40
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur)
  },
  [1, 2]
)
// -> [1, 2, 0, 1, 2, 3]
//*/

/* 41
console.log(!!null) // -> false
console.log(!!'') // -> false
console.log(!!1) // -> false
//*/

/* 42
// 返回一个唯一的id
setInterval(() => console.log('Hi'), 1000)
//*/

/* 43 **
console.log([...'Lydia']) // -> [ 'L', 'y', 'd', 'i', 'a' ]
//*/

/* 44
function* generator(i) {
  yield i
  yield i * 2
}
const gen = generator(10)
console.log(gen.next().value) // -> 10
console.log(gen.next().value) // -> 20
//*/

/* 45
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one')
})
const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two')
})
Promise.race([firstPromise, secondPromise]).then(res => console.log(res)) // -> two
//*/

/* 46 **
let person = {name: 'Lydia'}
const members = [person]
person = null
console.log(members) // -> [{name: 'Lydia'}]
//*/

/* 47
const person = {
  name: 'Lydia',
  age: 21
}
for (const item in person) {
  console.log(item) // -> name age
}
//*/

/* 48
console.log(3 + 4 + '5') // -> "75"
//*/

/* 49 **
// 依次解析字符，遇到不合法的即终止
const num = parseInt('7*6', 10)
console.log(num) // -> 7
//*/

/* 50
[1, 2, 3].map(num => {
  if (typeof num === 'number') return
  return num * 2
})
// -> [undefined, undefined, undefined]
//*/

/* 51
function getInfo(member, year) {
  member.name = 'Lydia'
  year = '1998'
}
const person = {name: 'Sarah'}
const birthYear = '1997'
getInfo(person, birthYear)
console.log(person, birthYear) // -> { name: 'Lydia' } "1997"
//*/

/* 52 **
function greeting() {
  throw "Hello world"
}
function sayHi() {
  try {
    const data = greeting()
    console.log('It worked!', data)
  } catch (e) {
    console.log("Oh no an error!", e)
  }
}
sayHi() // -> Oh no an error! Hello world
//*/

/* 53
function Car() {
  this.make = "Lamborghini"
  return { make: "Maserati" }
}
const myCar = new Car()
console.log(myCar.make) // -> "Maserati"
//*/

/* 54
(() => {
  let x = (y = 10)
})()
console.log(typeof x) // "undefined"
console.log(typeof y) // -> "number"
//*/

/* 55
class Dog {
  constructor(name) {
    this.name = name
  }
}
Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`)
}
const pet = new Dog('Mara')
pet.bark() // -> "Woof I am Mara"
delete Dog.prototype.bark
pet.bark() // -> TypeError: pet.bark is not a function
//*/

/* 56
const set = new Set([1, 1, 2, 3, 4])
console.log(set) // -> Set { 1, 2, 3, 4 }
//*/

/* 57 **
// counter.js
let counter = 10
export default counter

// index.js
import myCounter from './counter'
myCounter += 1
// 引入的模块是 只读 的: 你不能修改引入的模块。只有导出他们的模块才能修改其值。
console.log(myCounter) // -> Error
//*/

/* 58
// var、const 或 let 声明的变量无法通过delete删除
const name = 'Lydia'
// 挂载在全局对象上
age = 21
console.log(delete name) // -> false
console.log(delete age) // -> true
//*/

/* 59
const numbers = [1, 2, 3, 4, 5]
const [y] = numbers
console.log(y) // => 1
//*/

/* 60
const user = {name: 'Lydia', age: 21}
const admin = {admin: true, ...user}
console.log(admin) // -> { admin: true, name: 'Lydia', age: 21 }
//*/

/* 61 **
const person = {name: 'Lydia'}
// 默认enumerable: false, writable: false, configurable: false
Object.defineProperty(person, 'age', {
  value: 21
})
console.log(person) // { name: 'Lydia' }
console.log(Object.keys(person)) // -> ['name']
console.log(Object.getOwnPropertyDescriptor(person, 'age'))
//*/

/* 62 **
const setting = {
  username: 'lydiahallie',
  level: 19,
  health: 90
}
// 考察JSON.stringify第二个参数的用法
const data = JSON.stringify(setting, ['level', 'health'])
console.log(data)
//*/

/* 63 **
let num = 10
// 先返回再累加
const increaseNumber = () => num++
const increasePassedNumber = number => number++
const num1 = increaseNumber()
const num2 = increasePassedNumber(num1)
console.log(num1, num2)
//*/

/* 64 **
const value = {number: 10}
// 默认参数调用时才会计算，每次调用时都会创建一个新对象
const multiply = (x = { ...value }) => {
  console.log(x.number *= 2)
}
multiply() // -> 20
multiply() // -> 20
multiply(value) // -> 20
multiply(value) // -> 40
//*/

/* 65 **
[1, 2, 3,4].reduce((x, y) => console.log(x, y)) // -> 1 2 undefined 3 undefined 4
//*/

/* 66
class Dog {
  constructor(name) {
    this.name = name
  }
}
class Labrador extends Dog {
  // 错误
  constructor(name, size){
    this.size = size
  }
  // 正确
  constructor(name, size){
    super(anme)
    this.size = size
  }
  // 错误
  constructor(size){
    super(name)
    this.size = size
  }
  // 错误
  constructor(name, size){
    this.name = name
    this.size = size
  }
}
//*/

/* 67 **
// import 命令在编译阶段执行
// index.js
console.log('running index.js')
import { sum } from './sum.js'
console.log(sum(1, 2))

// sum.js
console.log('running sum.js')
export const sum = (a, b) => a + b

// -> running sum.js, running index.js, 3
// 如果将import换成require则变成 running index.js, running sum.js, 3
//*/

/* 68 **
console.log(Number(2) === Number(2)) // -> true
console.log(Boolean(false) === Boolean(false)) // -> true
console.log(Symbol('foo') === Symbol('foo')) // -> false
//*/

/* 69 **
const name = 'Lydia Hallie'
// 在开头插入 传入长度 - 字符串长度，如果传入长度小于字符串长度则不填充
console.log(name.padStart(13)) // -> " Lydia Hallie"
console.log(name.padStart(2)) // -> "Lydia Hallie"
//*/

 /* 70
 console.log("🥑" + "💻") // -> "🥑💻"
 //*/

 /* 71
function* startGame() {
  const answer = yield "Do you love JavaScript?"
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here"
  }
  return "JavaScript loves you back ❤️"
}
const game = startGame()
console.log(game.next().value)
// next() 传参会被当做上一个 yield 表达式的返回值
console.log(game.next('Yes').value)
 //*/

/* 72 **
console.log(String.raw`Hello\nworld`) // -> Hello\nworld
//*/

/* 73
async function getData() {
  return await Promise.resolve('I made it!')
}
const data = getData()
console.log(data) // -> Promise { <pending> }
//*/

/* 74
function addToList(item, list) {
  return list.push(item)
}
const arr = ['banana']
const result = addToList('apple', arr)
console.log(result, arr) // -> 2 [ 'banana', 'apple' ]
//*/

/* 75
const box = {x: 10, y: 20}
Object.freeze(box)
const shape = box
shape.x = 100
// 严格模式下抛出 TypeError
console.log(shape) // -> { x: 10, y: 20 }
//*/

/* 76
const { name: myName } = {name: 'Lydia'}
console.log(name) // -> ReferenceError: name is not defined
//*/

/* 77
// 纯函数
function sum(a, b) {
  return a + b
}
//*/

/* 78
const add = () => {
  const cache = {}
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`
    } else {
      const result = num + 10
      cache[num] = result
      return `Calculated! ${result}`
    }
  }
}
const addFunction = add()
console.log(addFunction(10)) // -> Calculated! 20
console.log(addFunction(10)) // -> From cache! 20
console.log(addFunction(5 * 2)) // -> From cache! 20
//*/

/* 79
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]
for (let item in myLifeSummedUp) {
  console.log(item)
}
// -> 0 1 2 3
for (let item of myLifeSummedUp) {
  console.log(item)
}
// -> "☕" "💻" "🍷" "🍫"
//*/

/* 80
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list) // -> [3, 2, 0.5]
//*/

/* 81
function sayHi(name) {
  return `Hi there, ${name}`
}
console.log(sayHi()) // -> Hi there, undefined
//*/

/* 82
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus()) // -> "🥑"
  console.log(data.getStatus.call(this)) // -> "😎"
}, 0)
//*/

/* 83
const person = {
  name: "Lydia",
  age: 21
}
let city = person.city
city = "Amsterdam"
let name = person.name
name = 'sarah'
console.log(person) // -> { name: 'Lydia', age: 21 }
//*/

/* 84
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21)) // -> ReferenceError: message is not defined
//*/

/* 85
fetch('https://www.website.com/api/user/1')
   .then(res => res.json())
  .then(res => console.log(res)) // 打印 res.json() 内容
//*/

/* 86
function getName(name) {
  // 可将 hasName 设置为 true
  const hasName = !!name
}
//*/
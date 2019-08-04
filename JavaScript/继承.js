// Object.getPrototypeOf() 返回指定对象的原型

console.log(Object.getPrototypeOf(Object.prototype) === null) // -> true
const obj = {}
console.log(Object.getPrototypeOf(obj) === obj.__proto__) // -> true
const o = Object.create(obj)
console.log(Object.getPrototypeOf(o) === obj) // -> true
//*/

/* 基于构造函数的继承 */

function Parent() {
  this.name = "kevin"
}
Parent.prototype.getName = function() {
  console.log(this.name)
  return this.name
}
function Child() {}
Child.prototype = new Parent()
const child = new Child()
//*/
/* 基于原型链的继承 */

// 属性遮蔽（property shadowing）

/* class 与 function 的差异 */
// 1. class会提升但不会赋值，进入 Temporary Dead Zone

const fun1 = new Fun1()
function Fun1() {
  console.log("function")
}
const class2 = new Class2() // -> ReferenceError: Cannot access 'Foo' before initialization
class Class2 {
  constructor() {
    console.log("class")
  }
}
//*/

// 2. class 内部启用严格模式

function Fun2() {
  bar = 42
}
const fun2 = new Fun2()
class Class2 {
  constructor() {
    fol = 42 // -> ReferenceError: fol is not defined
  }
}
const class2 = new Class2()
//*/

// 3. class 的所有方法（静态和实例）都不可枚举

function Fun3() {}
Fun3.method1 = function() {}
Fun3.prototype.method2 = function() {}
console.log(Object.keys(Fun3)) // -> ['method1']
console.log(Object.keys(Fun3.prototype)) // -> ['method2']
class Class3 {
  constructor() {}
  static method1() {}
  method2() {}
}
console.log(Object.keys(Class3)) // -> []
console.log(Object.keys(Class3.prototype)) // -> []
console.log(Object.getOwnPropertyDescriptors(Class3.prototype)) // ->
// */
/*
{
  constructor: {
    value: [Function: Class3],
    writable: true,
    enumerable: false,
    configurable: true
  },
  method2: {
    value: [Function: method2],
    writable: true,
    enumerable: false,
    configurable: true
  }
}
*/

// 4. class 所有方法都没有原型对象，所以没有 [[constructor]]， 不能使用 new

function Fun4() {
  Fun5 = "Fun5_"
}
Fun4.prototype.print = function() {
  console.log("function prototype print method")
}
const fun4 = new Fun4()
const fPrint = new fun4.print()
class Class4 {
  constructor() {}
  print() {
    console.log("class prototype print method")
  }
}
const class4 = new Class4()
const cPrint = new class4.print() // -> TypeError: class5.print is not a constructor
//*/

// 5. 必须使用 new 调用 class

function Fun5() {
  Fun5 = "Fun5_"
}
const fun5 = new Fun5()
class Class5 {
  constructor() {}
}
const class5 = Class5() // -> TypeError: Class constructor Class5 cannot be invoked without 'new'
//*/

// 6. class 内部无法重写类名

function Fun6() {
  Fun6 = "Fun6_"
}
const fun6 = new Fun6()
class Class6 {
  constructor() {
    Class6 = "Class6_" // -> TypeError: Assignment to constant variable.
  }
}
const class6 = new Class6()
//*/

/* 继承 */
function Father() {
  this.colors = ["red", "blue", "green"]
}
function Son() {
  Father.call(this)
}
const instance1 = new Son()
instance1.colors.push("black")
console.log(instance1.colors) // -> "red,blue,green,black"
const instance2 = new Son()
console.log(instance2.colors) // -> "red,blue,green"

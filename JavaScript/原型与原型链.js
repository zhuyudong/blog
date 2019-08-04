/**
 * 不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判 断为 object 类型，null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“object”。
 *
 * 基本类型存储在栈中，复制时复制值，比较时按值比较，创建并读取基本类型时会默认创建一个对应的基本包装类型对象来对其进行操作（字符串方法等），即相当于String、Number、Boolean等实例，
 *   基本包装类型与引用类型的区别在于对象的生存周期，使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前一直都保存在内存中，而自动创建的基本包装类型的对象，
 *   则只存在与一行代码的执行瞬间，然后被立即销毁。这也就是不能给基本类型添加属性和方法的原因了。
 * 对象类型存储在堆内存和栈内存中，复制时复制引用，比较时按引用比较
 * instanceof 检测左侧的 __proto__ 原型链上是否存在右侧的 prototype 原型
 */

Function.__proto__ === Function.prototype // true
Function.__proto__ === Object.__proto__ // true
Function.prototype.constructor === Function // true
Function === Function.constructor // true
Function.prototype.constructor === Function.constructor // true
Function.prototype.__proto__ === Object.prototype // true
Function.__proto__.__proto__ === Object.prototype // true

Object.__proto__ === Function.prototype // true
// 原型链的终点
Object.prototype.__proto__ // -> null
Object.prototype.constructor === Object // -> true
Object.constructor === Function // true
Object.__proto__ === Function.prototype // true
function Parent() {}
Parent.prototype.constructor === Object

Object.constructor === Function

const obj = {}
// console.log(obj.__proto__);
/**
 * [ 'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString' ]
 */
obj.__proto__ === Object.prototype // -> true
Object.prototype.constructor === Object // -> true

var obj1 = { a: 1, b: 2 }
var obj2 = {}
var obj3 = Object.create(obj1) // obj2 继承自 obj1
console.log(obj3.a)
console.log(Object.getOwnPropertyNames(obj3)) // []
console.log(Object.getOwnPropertyNames(obj3.__proto__)) // [ 'a', 'b' ]

// hasOwnProperty 是唯一处理属性并且不会遍历原型链的方法

//
var o = new Foo()
// 相当于
var o = new Object()
o.__proto__ = Foo.prototype
Foo.call(o)
o.someProp
// 相当于
Object.getPrototypeOf(o).someProp // 没找到再往上找
Object.getPrototypeOf(o.getPrototypeOf(o)).someProp

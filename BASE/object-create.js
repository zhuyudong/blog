/**
 * 会使用指定的原型对象及其属性去创建一个新的对象， Object.create(proto[, propertiesObject]) proto必须是对象或null，否则抛出 TypeError
 */

 // 实现类式继承
 function Shape() {
   this.x = 0;
   this.y = 0;
 }
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved');
}

function Rectangle() {
  Shape.call(this); // 继承父类私有属性/方法
}
// Rectangle的构造函数会指向Shape
Rectangle.prototype = Object.create(Shape.prototype);
// console.log(Object.getOwnPropertyDescriptors(Rectangle));
/**
 * { length:
   { value: 0,
     writable: false,
     enumerable: false,
     configurable: true },
  name:
   { value: 'Rectangle',
     writable: false,
     enumerable: false,
     configurable: true },
  arguments:
   { value: null,
     writable: false,
     enumerable: false,
     configurable: false },
  caller:
   { value: null,
     writable: false,
     enumerable: false,
     configurable: false },
  prototype:
   { value: Shape {},
     writable: true,
     enumerable: false,
     configurable: false } }
 */
// 重新设定其构造函数指向自己
Rectangle.prototype.constructor = Rectangle;
// console.log(Object.getOwnPropertyDescriptors(Rectangle));
/**
 * { length:
   { value: 0,
     writable: false,
     enumerable: false,
     configurable: true },
  name:
   { value: 'Rectangle',
     writable: false,
     enumerable: false,
     configurable: true },
  arguments:
   { value: null,
     writable: false,
     enumerable: false,
     configurable: false },
  caller:
   { value: null,
     writable: false,
     enumerable: false,
     configurable: false },
  prototype:
   { value: Rectangle { constructor: [Function: Rectangle] },
     writable: true,
     enumerable: false,
     configurable: false } }
 */

var rect = new Rectangle();
console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Shape); // true
rect.move(1, 1); // Shape moved

/* 继承多个对象 */
/*
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}
MyClass.prototype = Object.create(SuperClass.prototype);
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
MyClass.prototype.constructor = MyClass;
MyClass.prototype.myMethod = function() {
}
//*/

/* 使用Object.create 的 propertyObject 参数 */
// 创建原型为null的空对象
var o1 = Object.create(null);
console.log(Object.getOwnPropertyDescriptors(o1)); // {}
var o2 = {};
console.log(Object.getOwnPropertyDescriptors(o2)); // {}
// 以字面量方式创建的空对象相当于
var o3 = Object.create(Object.prototype); // {}
console.log(Object.getOwnPropertyDescriptors(o3));

var o4 = Object.create(Object.prototype, {
  foo: {
    writable: true,
    configurable: true,
    value: 'foo'
  },
  bar: {
    configurable: false,
    get: function() {
      return 10;
    },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
  }
});
console.log(Object.getOwnPropertyDescriptors(o4));
/**
 * { foo:
   { value: 'foo',
     writable: true,
     enumerable: false,
     configurable: true },
  bar:
   { get: [Function: get],
     set: [Function: set],
     enumerable: false,
     configurable: false } }
 */
// console.log(Object.getOwnPropertyDescriptors(Object.prototype));
function Constructor(){}
var o5 = new Constructor();
console.log(Object.getOwnPropertyDescriptors(o5)); // {}
// 等效于
var o6 = Object.create(Constructor.prototype);
console.log(Object.getOwnPropertyDescriptors(o6)); // {}
// 默认配置都是false，即不可更改、不可枚举、不可删除
var o7 = Object.create({}, {p: {value: 42}});
o7.p = 22;
console.log(o7.p); // 42
console.log(Object.getOwnPropertyDescriptors(o7));
/**
 * { p:
   { value: 42,
     writable: false,
     enumerable: false,
     configurable: false } }
 */
console.log(o7.isPrototypeOf('p')); // false
console.log(o7.hasOwnProperty('p')); // true
console.log(Object.getOwnPropertyNames(o7)); // [ 'p' ]
o7.q = 12;
for (var prop in o7) {
  console.log(prop); // q
}
delete o7.p; // 删除失败
console.log(Object.getOwnPropertyDescriptors(o7));
/**
 * { p:
   { value: 42,
     writable: false,
     enumerable: false,
     configurable: false },
  q:
   { value: 12,
     writable: true,
     enumerable: true,
     configurable: true } }
 */
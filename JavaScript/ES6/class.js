class Point {
}

class ColorPoint extends Point {

}
console.log(Reflect.ownKeys(Point));
console.log(Reflect.ownKeys(Point.prototype));
console.log(Reflect.ownKeys(ColorPoint));
console.log(Reflect.ownKeys(ColorPoint.prototype));
console.log(ColorPoint.__proto__ === Point); // true

class Point1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.pri = 'pri';
    // this 指向本身的实例或被继承时指向子类的构造函数
    console.log('Point1 constructor: ', this);
  }
  static hello() {
    console.log('hello world');
  }
  p() {
    console.log('p');
  }
}
class ColorPoint1 extends Point1 {
  constructor(x, y, color) {
    // 子类没有this对象，继承父类的this对象
    // 调用父类的构造函数, 如调用在constructor中直接调用 this 报 ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // 相当于 Point1.prototype.constructor.call(this);
    super(x, y); 
    // this指向自身的实例
    this.color = color;
    // 相当于 Point1.prototype.p()
    super.p(); // p
    console.log('ColorPoint1 constructor: ', this);
  }
  /**
   * 会默认添加 constructor(...args) { super(...args); }
   */

  toString() {
    super.p(); // p
    return this.color + ' ' + super.toString();
  }

  get m() {
     // pri 是父类的实例属性，不会被子类继承，故取不到
    return super.pri;
  }
}
const colorPoint1 = new ColorPoint1(1, 2, 'red');
console.log(colorPoint1); // ColorPoint1 { x: 1, y: 2, color: 'red' }
console.log(colorPoint1.toString()); // red [object Object]
ColorPoint1.hello(); // hello world
// 子类的原型指向父类
console.log(Object.getPrototypeOf(ColorPoint1) === Point1); // true
console.log(colorPoint1.m); // undefined
// 定义在父类的原型对象上就能取到
Point1.prototype.n = 'n';
console.log(colorPoint1.n); // n

class Point2 {
  constructor() {
    this.x = 1;
  }
}
class ColorPoint2 extends Point2 {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}
const colorPoint2 = new ColorPoint2();


function mix(...mixins) {
  class Mix{}

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝实例属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }
  return Mix;
}
function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, source);
    }
  }
}

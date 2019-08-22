class Point {
  constructor(...args) {
    console.log(new.target.name) //  指向当前正在执行的函数，打印子类的名
  }
  p() {
    return "p method"
  }
}
class ColorPoint extends Point {
  constructor(...args) {
    super(...args) // 调用父类的构造函数，返回当前类的实例
    // 相当于
    // Point.prototype.constructor.call(this)
    // super 指向 Point.prototype
    console.log(super.p()) // -> "p method"
  }
}

/**
 * ES6继承是先将父类实例对象的属性和方法加到this上面，然后用子类的构造函数修改this
 * ES5是先创造子类的实例对象this，然后再将父类的方法添加到子类上（Parent.call(this))
 */

// 父类的的静态也会被子类继承

console.log(Object.getPrototypeOf(ColorPoint) === Point) // -> true

function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin())
      }
    }
  }
  for (let minxi of minxis) {
    copyProperties(Mix, minxi)
    copyProperties(Mix.prototype, minxi.prototype)
  }
  return Mix
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== "constructor" && key !== "prototype" && key !== "name") {
      let desc = Object.getOwnPropertyDescriptor(source, key)
      Object.defineProperty(target, key, desc)
    }
  }
}

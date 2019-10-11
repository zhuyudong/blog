/*
const compose = function(...args) {
  let length = args.length
  let count = lenght - 1
  let result
  return function f1(...arg1) {
    result = args[count].apply(this, arg1)
    if (count <= 0) {
      count = length - 1
      return result
    }
    count--
    return f1.call(null, result)
  }
}
*/
// const add = (a, b) => {
//   return a + b
// }
// const minus = (a, b) => {
//   return a - b
// }
// const multi = (a, b) => {
//   return a * b // 6
// }
// const funcs = [add, minus, multi]
// const cos = compose(...funcs)
// cos(2, 3)

/**
 * 1. 将context置为函数
 * 2. 使用Symbol构造唯一的key
 * 3. 将这个key作为上下文的属性，并将 this 赋予它
 * 4. 执行这个function
 * 5. 返回结果
 */
/*
Function.prototype.call =
  Function.prototype.call ||
  function(context, ...args) {
    if (this === Function.prototype) {
      return undefined
    }
    context = context || window
    const fn = Symbol()
    // this 是call的调用者
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
  }
//*/
/*
Function.prototype.apply =
  Function.prototype.apply ||
  function(context, args) {
    if (this === Function.prototype) {
      return undefined
    }
    context = context || window
    const fn = Symbol()
    context[fn] = this
    const result = Array.isArray(args) ? context[fn](...args) : context[fn]() // apply 不接受非数组入参
    delete context[fn]
    return result
  }
//*/

/**
 * 1. 返回一个闭包函数
 * 2. 判断是否为构造函数调用，是则用 new 调用
 * 3. 使用apply执行函数
 */
/*
Function.prototype.bind =
  Function.prototype.bind ||
  function(context, ...args1) {
    if (this === Function.prototype) {
      throw new TypeError("Error")
    }
    const _this = this
    return function F(...args2) {
      // bind 前面是否有 new
      if (this instanceof F) {
        return new _this(...args1, ...args2)
      }
      return _this.apply(context, args1.concat(args2))
    }
  }
//*/

/**
 * origin 的 prototype 是否在 target 的原型链上
 */
/*
function instanceofMock(target, origin) {
  if (typeof target !== 'object') {
    return false
  }
  const proto = target.__proto__
  if (proto) {
    if (proto === origin.prototype) {
      return true
    } else {
      return instanceofMock(proto, origin)
    }
  } else {
    return false
  }
}
//*/
function instanceofMock(L, R) {
  if (typeof L !== "object") {
    return false
  }
  while (true) {
    if (L.__proto__ === R.prototype) {
      return true
    } else if (L === null) {
      // Object.prototype
      return false
    }
    L = L.__proto__
  }
}
console.log(instanceofMock("", String))

/* 继承 */
function People() {
  this.type = "people"
}
People.prototype.eat = function() {
  console.log("eat")
}
function Man(name, color) {
  this.name = name
  this.color = color
}
// 原型继承
// 缺点：所有子类共享 People 实例属性
Man.prototype = new People()
// const man1 = new Man("man1", "red")
// const man2 = new Man("man2", "green")
// man1.type = "people man1"
// const people = new People()
// people.type = "people parent"
// console.log(man1, man1.__proto__, man2, man2.__proto__)

// 构造继承
function Man(name, color) {
  People.call(this)
}

// 组合继承
function Man(name, color) {
  People.call(this)
}
Man.prototype = People.prototype

// 寄生组合继承
function Man(name, color) {
  People.call(this)
}
Man.prototype = Object.create(People.prototype, {
  constructor: {
    value: Man
  }
})

// inherits
function inherit(ctor, superCtor) {
  ctor.super_ = superCtor
  ctor.proptotype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumberable: false,
      configurable: true,
      writeable: true
    }
  })
}

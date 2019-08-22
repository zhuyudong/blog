/*
class AbstractClass1 {
  constructor() {
    if (new.target === AbstractClass1) {
      throw new Error("抽象类不能示例化")
    }
    // 等效于如下
    // if (new.target.name === "AbstractClass1") {
    //   throw new Error("抽象类不能示例化")
    // }
  }
  operate() {
    throw new Error("抽象方法不能调用")
  }
}
new AbstractClass1()
const AbstractClass2 = function() {
  if (new.target.name === "AbstractClass2") {
    throw new Error("抽象类不能示例化")
  }
}
AbstractClass2.prototype.operate = function() {
  throw new Error("抽象类不能示例化")
}
// new AbstractClass2()
//*/

/* 1. function
// 饭店
function Restaurant() {}
Restaurant.orderDish = function(type) {
  switch (type) {
    case "鱼香肉丝":
      // 返回具体菜的实例
      return new YuXiangRouSi()
  }
}
// 抽象菜
function Dish() {
  // this 指向子类的实例
  this.kind = "菜"
}
Dish.prototype.eat = function() {
  throw new Error("抽象方法不能调用")
}
function YuXiangRouSi() {
  this.type = "鱼香肉丝"
}
YuXiangRouSi.prototype = new Dish()
// 继承抽象菜父类的方法
YuXiangRouSi.prototype.eat = function() {
  // console.log(this, this.prototype, this.__proto__)
  console.log(this.kind + "-" + this.type + "真香～")
}
const dish1 = Restaurant.orderDish("鱼香肉丝")
dish1.eat()
//*/

/* 2. class
class Restaurant {
  static orderDish(type) {
    switch (type) {
      case "鱼香肉丝":
        return new YuXiangRouSi()
      default:
        throw new Error("本店没有这个～")
    }
  }
}
class Dish {
  constructor() {
    if (new.target.name === "Dish") {
      throw new Error("抽象类不能直接实例化!")
    }
    this.kind = "菜"
  }
  eat() {
    throw new Error("抽象方法不能调用!")
  }
}
class YuXiangRouSi extends Dish {
  constructor(type) {
    super()
    this.type = "鱼香肉丝"
  }
  eat() {
    console.log(this.kind + "-" + this.type + "真香～")
  }
}
// const dish0 = new Dish()
const dish1 = Restaurant.orderDish("鱼香肉丝")
dish1.eat()
//*/

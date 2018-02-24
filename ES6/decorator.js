/**
 * 装饰器在编译时执行
 */

// 不带参数
@testable1
class MyTestableClass1 {
}
function testable1(target) {
  target.isTestable = true;
}
console.log(MyTestableClass1.isTestable); // true


// 带参数
@testable2(true)
class MyTestableClass2 {
}
function testable2(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}
console.log(MyTestableClass2.isTestable); // true

// 添加实例属性
function testable3(target) {
  target.prototype.isTestable = true;
}
@testable3
class MyTestableClass3 {
}
let obj3 = new MyTestableClass3();
console.log(obj3.isTestable); // true

// mixin
function mixins4(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list);
  }
}
const Foo4 = {
  foo(){
    console.log('foo');
  }
}
@mixins4(Foo4)
class MyTestableClass4 {
};
let obj4 = new MyTestableClass4();
obj4.foo(); // foo

// 模拟上面mixins
const Foo5 = {
  foo(){
    console.log('foo');
  }
}
class MyTestableClass5 {}
Object.assign(MyTestableClass5.prototype, Foo5); // 改变MyTestableClass5原型对象
let obj5 = new MyTestableClass5();
obj5.foo(); // foo
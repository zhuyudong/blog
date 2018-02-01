/**
 * Object.freeze 冻结的对象所有属性都不能更改， 是浅冻结，即只冻结value是基本类型，不冻结value是对象或数组
 */

var obj = {
  prop: function() {},
  foo: 'bar'
};
obj.foo  = 'baz';
obj.lumpy = 'woof';
delete obj.prop;
console.log(obj);
var o = Object.freeze(obj); // 返回被冻结的对象
console.log(o === obj); // true
console.log(Object.isFrozen(o)); // true
console.log(Object.isFrozen(obj)); // true
obj.foo = 'quux';
// 严格模式下抛出TypeError
function fail() {
  'use strict';
  // obj.foo = 'sparky'; // Cannot assign to read only property 'foo' of object '#<Object>'
  // delete obj.foo; // TypeError: Cannot delete property 'foo' of #<Object>
}
fail();
// Object.defineProperty(obj, 'ohai', { value: 17 }); // TypeError: Cannot define property ohai, object is not extensible
// Object.setPrototypeOf(obj, { x: 20 }); // TypeError: #<Object> is not extensible
// obj.__proto__ = { x: 20 }; // TypeError: #<Object> is not extensible
// ES5 
Object.freeze(1); // TypeError: 1 is not an object
// ES2015
Object.freeze(1); // 1

/* 冻结数组 */
let a = [0];
Object.freeze(a);
// 静默失败
a[0] = 1;
console.log(a); // [0]
// a.push(2); // TypeError: Cannot add property 1, object is not extensible
// 可正常展开
let [b, c] = Object.freeze([1, 2]);
console.log(b, c); // 1 2

/* 浅冻结 */
var obj1 = {
  internal: {},
  arr: []
};
Object.freeze(obj1);
obj1.internal.yy = 'haha';
obj1.arr.push(0);
console.log(obj1); // { internal: { yy: 'haha' }, arr: [ 0 ] }

/* 深冻结 */
function deepFreeze(obj) {
  var propNmaes = Object.getOwnPropertyNames(obj);
  propNmaes.forEach(name => {
    var prop = obj[name];
    if (typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}
var obj2 = {
  internal: {},
  arr: []
};
deepFreeze(obj2);
// 静默失败
obj2.internal.a = 'otherValue';
// obj2.arr.push(2); // TypeError: Cannot add property 0, object is not extensible
console.log(obj2); // { internal: {}, arr: [] }
const assert = require('assert');

var obj = {
  prop: function() {},
  foo: 'bar'
};
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;
console.log(obj); // { foo: 'baz', lumpy: 'woof' }

var o = Object.seal(obj);
console.log(o); // { foo: 'baz', lumpy: 'woof' }
console.log(o === obj); // true
console.log(Object.isSealed(o)); // true
console.log(Object.isSealed(obj)); // true

obj.foo = 'quux';
console.log(o); // { foo: 'quux', lumpy: 'woof' }
console.log(obj); // { foo: 'quux', lumpy: 'woof' }
// 不能把一个数据属性重定义成访问器属性
// Object.defineProperty(obj, 'foo', {
//   get: function() {
//     return 'g';
//   }
// }); // TypeError: Cannot redefine property: foo

// 不能添加新属性
obj.quaxxor = 'the friendly duck'; // 静默失败
// 不能删除已有属性
delete obj.foo; // 静默失败
console.log(obj); // { foo: 'quux', lumpy: 'woof' }

// function fail() {
//   'use strict';
//   delete obj.foo;
//   obj.sparky = 'arf';
// }
// fail(); // TypeError: Cannot delete property 'foo' of #<Object>

// 异常会终止程序继续往下运行
// Object.defineProperty(obj, 'ohai', { value: 17 }); // TypeError: Cannot define property ohai, object is not extensible
Object.defineProperty(obj, 'foo', { value: 'edit' });
console.log(o); // { foo: 'edit', lumpy: 'woof' }
console.log(obj); // { foo: 'edit', lumpy: 'woof' }
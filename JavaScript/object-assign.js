/**
 * 只能拷贝源对象的可枚举属性，同时拷贝时无法拷贝属性的特性们，访问器属性也会被转成数据属性，也无法拷贝源对象的原型
 */
var obj1 = {a: 1};
var copy1 = Object.assign({}, obj1);
console.log(copy1);

function test() {
  'use strict';

  let obj1 = {a:0, b: { c: 0 }};
  let obj2 = Object.assign({}, obj1); 
  console.log(JSON.stringify(obj2)); // {"a":0,"b":{"c":0}}
  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // {"a":1,"b":{"c":0}}
  console.log(JSON.stringify(obj2)); // {"a":0,"b":{"c":0}}
  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // {"a":1,"b":{"c":0}}
  console.log(JSON.stringify(obj2)); // {"a":2,"b":{"c":0}}
  obj2.b.c = 3; // 内部对象是浅拷贝
  console.log(JSON.stringify(obj1)); // {"a":1,"b":{"c":3}}
  console.log(JSON.stringify(obj2)); // {"a":2,"b":{"c":3}}
  // 深拷贝
  obj1 = { a: 0, b: { c: 0 }};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // {"a":0,"b":{"c":0}}
}
test();

var o1 = {a: 1, b: 2, c: 3};
var o2 = {b: 2, c: 2};
var o3 = {c: 3};
var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

// 可拷贝Symbol属性
var o4 = {a: 1};
var o5 = {[Symbol('foo')]: 2};
var obj4 = Object.assign({}, o4, o5);
console.log(obj4); // { a: 1, [Symbol(foo)]: 2 }
console.log(Object.getOwnPropertySymbols(obj4)); // [ Symbol(foo) ]

// 继承属性和不可枚举属性不能拷贝
var obj5 = Object.create({foo: 1}, { // foo 是继承属性
  bar: {
    value: 2 // 不可枚举
  },
  baz: {
    value: 3,
    enumerable: true
  }
});
var copy5 = Object.assign({}, obj5);
console.log(copy5); // { baz: 3 }

// 原始类型会被包装为对象，null和undefined会被丢弃，只有字符串才有自身可枚举属性
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');
var obj6 = Object.assign({}, v1, v2, null, undefined, v3, v4);
console.log(obj6); // { '0': 'a', '1': 'b', '2': 'c' }

// 异常会打断后续拷贝任务
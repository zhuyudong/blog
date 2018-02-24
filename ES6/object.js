Object.getOwnPropertyNames(Object);
/**
 [ 'length',
  'name',
  'prototype',
  'assign',
  'getOwnPropertyDescriptor',
  'getOwnPropertyDescriptors',
  'getOwnPropertyNames',
  'getOwnPropertySymbols',
  'is',
  'preventExtensions',
  'seal',
  'create',
  'defineProperties',
  'defineProperty',
  'freeze',
  'getPrototypeOf',
  'setPrototypeOf',
  'isExtensible',
  'isFrozen',
  'isSealed',
  'keys',
  'entries',
  'values' ]
 */
Object.getOwnPropertyNames(Object.prototype);
/*
[ 'constructor',
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

/**
 * for...in 遍历对象自身和继承的可枚举的属性
 * Object.keys() 返回对象自身的可枚举的属性的键名
 * JSON.stringify() 只串行化对象自身的可枚举的属性
 * Object.assign() 只拷贝对象自身的可枚举的属性，忽略enumerable为false的属性
 * Object.getOwnPropertyNames() 返回对象自身所有属性（不包含Symbol属性，但是包含不可枚举属性）
 * Reflect.ownKeys() 返回对象自身所有属性（包括不可枚举和Symbol属性）
 */

 // 所有class的原型方法都不可枚举
Object.getOwnPropertyDescriptors(class {foo(){}});
/**
 { length:
   { value: 0,
     writable: false,
     enumerable: false,
     configurable: true },
  prototype:
   { value: {},
     writable: false,
     enumerable: false,
     configurable: false } }
 */

Object.getOwnPropertySymbols(Function.prototype);
/**
 [Symbol(Symbol.hasInstance)]
 */

// 读取对象的原型对象
Object.getPrototypeOf(new Object) === Object.prototype; // true

// 原型对象指向
var obj = new Object;
obj.__proto__ === Object.prototype; // true
var mod1 = require('./module1');
console.log('module1: ', mod1.counter); // 3
mod1.incCounter();
console.log('module1: ', mod1.counter); // 3

var mod2 = require('./module2');
console.log('module2: ', mod2.counter); // 3
mod2.incCounter();
console.log('module2: ', mod2.counter); // 4

import { counter, incCounter } from './module3';
console.log('module3: ', counter); // 3
incCounter();
console.log('module3: ', counter); // 4

import { foo, obj } from './module4';
console.log('module4: ', foo); // bar
setTimeout(() => console.log('module4: ', foo), 500); // baz
obj.prop = 123;
// obj = {}; // SyntaxError: /Users/zhuyudong/Desktop/CODE/Blog/ES6/module.js: "obj" is read-only

// import会默认置顶
import './module5';
import './module6';

// exports.done = false;
// var mod7 = require('./module');
// console.log('在 module.js 中， mod7.done = %j', mod7.done);
// exports.done = true;
// console.log('module.js 执行完毕');
var mod7 = require('./module7');
var mod8 = require('./module8');
console.log('在 module.js 之中, mod7.done=%j, mod8.done=%j', mod7.done, mod8.done);

/*
var a = require('a'); // 安全的写法
var foo = require('a').foo; // 危险的写法
exports.good = function(arg) {
  return a.foo('good', arg); // 使用的是 a.foo 的最新值
}
exports.bad = function(arg) {
  return foo('bad', arg); // 使用的是一个部分加载时的值
}
*/

console.log(Object.getOwnPropertyNames(require));
/**
 * [ 'length',
  'name',
  'prototype',
  'resolve',
  'main',
  'extensions',
  'cache' ]
 */
console.log(Object.getOwnPropertyNames(require.prototype)); // [ 'constructor' ]
console.log(Object.getOwnPropertyNames(module));
/**
 * [ 'id',
  'exports',
  'parent',
  'filename',
  'loaded',
  'children',
  'paths' ]
 */
console.log(exports === module.exports); // true
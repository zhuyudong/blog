// Object.getOwnPropertyNames(Function);
/*
[ 'length', 'name', 'prototype' ]
 */
// Object.getOwnPropertyNames(Function.prototype);
/*
[ 'length',
  'name',
  'arguments',
  'caller',
  'constructor',
  'apply',
  'bind',
  'call',
  'toString' ]
 */
// Object.getOwnPropertyDescriptors(Function.prototype);
/**
 { length:
   { value: 0,
     writable: false,
     enumerable: false,
     configurable: true },
  name:
   { value: '',
     writable: false,
     enumerable: false,
     configurable: true },
  arguments:
   { get: [Function],
     set: [Function],
     enumerable: false,
     configurable: true },
  caller:
   { get: [Function],
     set: [Function],
     enumerable: false,
     configurable: true },
  constructor:
   { value: [Function: Function],
     writable: true,
     enumerable: false,
     configurable: true },
  apply:
   { value: [Function: apply],
     writable: true,
     enumerable: false,
     configurable: true },
  bind:
   { value: [Function: bind],
     writable: true,
     enumerable: false,
     configurable: true },
  call:
   { value: [Function: call],
     writable: true,
     enumerable: false,
     configurable: true },
  toString:
   { value: [Function: toString],
     writable: true,
     enumerable: false,
     configurable: true },
  [Symbol(Symbol.hasInstance)]:
   { value: [Function: [Symbol.hasInstance]],
     writable: false,
     enumerable: false,
     configurable: false } }
 */

var func = new Function;
// Object.getOwnPropertyNames(func);
/*
[ 'length', 'name', 'arguments', 'caller', 'prototype' ]
 */
func.__proto__ === Function.prototype; // true
func.__proto__.__proto__ === Object.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true

// 尾调用 tail call optimization
// 尾递归 容易造成 stack overflow
// 复杂度O(n)
console.time('尾递归');
function factorial1(n) {
  if (n === 1) return 1;
  return n * factorial1(n - 1);
}
console.log(factorial1(100)); // 120， 如果传参过大会造成 RangeError: Maximum call stack size exceeded
console.timeEnd('尾递归');
// 复杂度O(1)，只保留一个调用记录
console.time('尾递归优化');
function factorial2(n, total) {
  if (n === 1) return total;
  return factorial2(n - 1, n * total);
}
console.log(factorial2(100, 1));
console.timeEnd('尾递归优化');
// 非尾递归的fabonacci
console.time('Fibonacci');
function Fibonacci1(n) {
  if (n <= 1 ) return 1;
  return Fibonacci1(n - 1) + Fibonacci1(n - 2);
}
console.log(Fibonacci1(5)); // 传参过大会造成堆栈溢出
console.timeEnd('Fibonacci');
console.time('Fibonacci优化');
function Fibonacci2(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) return ac2;
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}
console.log(Fibonacci2(100)); // 传参过大会造成 RangeError: Maximum call stack size exceeded
console.timeEnd('Fibonacci优化');


// 尾递归改写1
function tailFactorial3(n, total) {
  if (n === 1) return total;
  return tailFactorial3(n - 1, n * total);
}
function factorial3(n) {
  return tailFactorial3(n, 1);
}
console.log(factorial3(5));

// 尾递归改写2
function currying(fn, n) {
  return function(m) {
    return fn.call(this, m, n);
  }
}
function tailFactorial4(n, total) {
  if (n === 1) return total;
  return tailFactorial4(n - 1, n * total);
}
const factorial4 = currying(tailFactorial4, 1);
console.log(factorial4(100));

// 尾递归改写3
function factorial5(n, total = 1) {
  if (n === 1) return total;
  return factorial5(n - 1, n * total);
}
console.log(factorial5(5)); // 120

// 尾递归优化只在严格模式下使用
function testArguments() {
  // 严格模式下，尾调用会改写函数调用栈，所以不要使用arguments
  // 'use strict'
  // console.log('testArguments: ', arguments); // {}
  // console.log('testArguments: ', testArguments.arguments); // {}
  // console.log('testArguments caller: ', arguments.caller); // undefined  返回调用当前函数的函数
  // console.log('testArguments caller: ', testArguments.caller); // 返回本身，带注释
}
testArguments();

// 尾递归优化的实现

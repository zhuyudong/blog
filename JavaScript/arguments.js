function test1() {
  console.log(arguments);
  const args1 = Array.prototype.slice.call(arguments);
  const args2 = [].slice.call(arguments); // 会阻止某些JS引擎优化，尽量不用
  const args3 = Array.from(arguments);
  const args4 = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
  const args5 = [...arguments];
  console.log(args1, args2, args3, args4, args5);
}
test1(1, 2);
/**
 * { '0': 1, '1': 2 }
 * [ 1, 2 ] [ 1, 2 ] [ 1, 2 ] [ 1, 2 ] [ 1, 2 ]
 */
console.log(typeof arguments); // object
console.log(typeof arguments[0]); // object
// arguments 对象只能在函数内使用
// 同名函数后面的会覆盖前面的
function test2(a){
    console.log(a,Object.prototype.toString.call(arguments));
    console.log(arguments[0], arguments[1]);
    console.log(typeof arguments[0]);
}
test2(1);
/*
1 "[object Arguments]"
1 undefined
number
*/

// arguments.callee 指向当前执行的函数， 严格模式下不要使用
// 1
function factorial1(n) {
  return !(n > 1) ? 1 : factorial1(n - 1) * n;
}
console.log([1, 2, 3, 4, 5].map(factorial1)); // [ 1, 2, 6, 24, 120 ]
// 2 在匿名函数中使用arguments.callee应该被禁止
const map2 = [1, 2, 3, 4, 5].map(function(n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
console.log(map2); // [ 1, 2, 6, 24, 120 ]
// 3
const map3 = [1, 2, 3, 4, 5].map(function factorial3(n) {
  return !(n > 1) ? 1 : factorial3(n - 1) * n;
});
console.log(map3); // [ 1, 2, 6, 24, 120 ]

// arguments.caller 指向调用当前函数的函数，已废弃，使用 Function.caller
function whoCalled() {
  console.log(arguments.caller); // undefined
  console.log(whoCalled.caller); // [Function]
}
whoCalled();
/**
 * 闭包是可以访问自由变量的函数
 * 闭包是函数和声明该函数的词法环境的组合
 * 闭包特性：函数嵌套函数、函数内部可以引用外部的参数和变量、参数和变量不会被垃圾回收机制回收
 */

 var scope = 'global scope';
 function checkScope() {
   var scope = 'local scope';
   function f () {
     return scope;
   }
   return f;
 }
 var foo = checkScope();
 console.log(foo()); // local scope
 console.log(checkScope()()); // local scope

 var data = [];
 for (var i = 0; i < 3; i++) {
   data[i] = function() {
     console.log(i);
   }
 }
 data[0](); // 3
 data[1](); // 3
 data[2](); // 3


 // 闭包形式
 var data1 = [];
 for (var j = 0; j < 3; j++) {
   data1[j] = (function(j) {
    return function() {
      console.log(j);
    }
   })(j);
 }
 data1[0](); // 0
 data1[1](); // 1
 data1[2](); // 2

 // let
 var data2 = [];
 for (let m = 0; m < 3; m++) {
   data2[m] = function() {
     console.log(m);
   }
 }
 data2[0](); // 0
 data2[1](); // 1
 data2[2](); // 2

// let 闭包
 var data3 = [];
 for (let n = 0; n < 3; n++) {
   data3[n] = (function(n) {
    return function() {
      console.log(n);
    }
   })(n);
 }
 data3[0](); // 0
 data3[1](); // 1
 data3[2](); // 2
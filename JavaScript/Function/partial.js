/*-----------------------------------偏函数-----------------------------------*/
/*
function add(a, b) {
  return a + b;
}
var addOne = add.bind(null, 1);
console.log(addOne(2)); // 3

function partial1(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    // this 指向 obj1
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return fn.call(this, newArgs);
  }
}
function add1(a, b) {
  return a + b + this.value;
}
var addOne1 = partial1(add1, 1);
var value1 = 1;
var obj1 = {
  value: 2,
  addOne: addOne1
};
console.log(obj1.addOne(2));
//*/

/*-----------------------------------惰性求值------------------------------------*/
/*
// 返回首次调用的Date对象
// 1 污染了全局变量
var t;
function foo1() {
  if (t) return t;
  t = new Date();
  return t;
}
// 2 闭包 但未解决每次都要判断的问题
var foo2 = (function() {
  var t;
  if (t) return t;
  t = new Date();
  return t;
})();
console.log(foo2);
// 3 函数对象 将变量挂在在函数上，但也未解决每次判断的性能问题
function foo3() {
  if (foo3.t) return foo3.t;
  foo3.t = new Date();
  return foo3.t;
}
console.log(foo3());
// 4 惰性函数
var foo4 = function() {
  var t = new Date();
  foo4 = function() {
    return t;
  }
  return foo4();
}
console.log(foo4());
// 5 应用
function addEvent1(type, el, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, fn);
  }
}
// 6 改进
function addEvent2(type, el, fn) {
  if (window.addEventListener) {
    addEvent2 = function(type, el, fn){
      el.addEventListener(type, fn, false);
    }
  } else if (window.attachEvent) {
    addEvent2 = function(type, el, fn){
      el.attachEvent('on' + type, fn);
    }
  }
}
// 7 改进
var addEvent3 = (function(type, el, fn) {
  if (window.addEventListener) {
    return function(type, el, fn){
      el.addEventListener(type, fn, false);
    }
  } else if (window.attachEvent) {
    return function(type, el, fn){
      el.attachEvent('on' + type, fn);
    }
  }
})();
//*/

/*-----------------------------------数据扁平化-----------------------------------*/
var arr = [1, [2, [3, 4]], 5];
// 使用循环递归
function flattern(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattern(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattern(arr));
// 利用toString() 只能处理数字
function flattern1(arr) {
  return arr.toString().split(',').map(i => +i);
}
console.log(flattern1(arr));
// 使用reduce
function flattern2(arr) {
  return arr.reduce(function(prev, next) {
    return prev.concat(Array.isArray(next) ? flattern(next) : next);
  }, []);
}
console.log(flattern2(arr));
// 只能拍平一层
console.log([].concat(...arr));
// 使用some
function flattern3(arr) {
  while(arr.some(i => Array.isArray(i))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flattern3(arr));


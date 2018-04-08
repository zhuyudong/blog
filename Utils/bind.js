/* 模拟bind的实现 */
var value = 2;
var foo = {
  value: 1
};
function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
  // 有无返回值情况是不一样的
  // return this.value;
}
// 返回一个绑定了指定this的新函数
var bindFoo = bar.bind(foo, 'name');
bindFoo(18); // name 18 1
// 模拟
// 这个是不带参数的情况
Function.prototype.bind2 = function(context) {
  // 缓存this
  var self = this;
  // 返回一个新函数
  return function() {
    // return 是兼容函数有返回值的情况
    return self.apply(context);
  }
}
var bindFoo2 = bar.bind2(foo);
bindFoo2(); // 1
// 带参数
Function.prototype.bind3 = function(context) {
  var self = this;
  // 从序号1开始截取参数
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    // 科里化传参
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.call(context, args.concat(bindArgs));
  }
}
// 当函数作为构造函数使用时，bind的this会失效
Function.prototype.bind3 = function(context) {
  var self = this;
  // 从序号1开始截取参数
  var args = Array.prototype.slice.call(arguments, 1);
  var fBound = function() {
    // 科里化传参
    var bindArgs = Array.prototype.slice.call(arguments);
    // 判断是不是被当做构造函数使用
    return self.call(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  fBound.prototype = this.prototype;
  return fBound;
}
// 进一步优化
Function.prototype.bind4 = function(context) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }
  var self = this;
  // 使用空函数中转，避免影响绑定函数的prototype
  var fNOP = function(){};
  // 从序号1开始截取参数
  var args = Array.prototype.slice.call(arguments, 1);
  var fBound = function() {
    // 科里化传参
    var bindArgs = Array.prototype.slice.call(arguments);
    // 判断是不是被当做构造函数使用
    return self.call(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}
var bindFoo4 = bar.bind4(foo);
bindFoo4();
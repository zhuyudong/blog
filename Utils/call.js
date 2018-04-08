/* 模拟call的实现 */
var foo1 = {
  value: 1
};
function bar1() {
  console.log(this.value);
}
bar1.call(foo1); // 1

var foo2 = {
  value: 1,
  bar: function() {
    console.log(this.value);
  }
}
foo2.bar(); // 1

/**
 * 模拟步骤：
 * 1. 将函数设为对象的属性 foo.fn = bar
 * 2. 执行该函数 foo.fn()
 * 3. 删除该函数 delete foo.fn
 */
var foo3 = {
  value: 1
};
function bar3() {
  console.log(this.value);
}
Function.prototype.call3 = function(context) {
  // this 指向被执行的函数
  console.log(this);
  context.fn = this;
  context.fn();
  delete context.fn;
}
bar3.call3(foo3); // 1
// 带参数
function bar4(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
bar4.call(foo1, 'kevin', 18); // kevin 18 1
Function.prototype.call4 = function(context) {
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']'); // [ 'arguments[1]', 'arguments[2]' ]
  }
  console.log(args);
  var excute = 'context.fn(' + args + ')';
  console.log(excute); // context.fn(arguments[1],arguments[2])
  eval(excute);
  delete context.fn;
}
bar4.call4(foo3, 'kevin', 18); // // kevin 18 1
// 考虑this为null的情况
var value = 1;
function bar5() {
  console.log(this.value);
}
console.log(this); // {}
bar5.call(null); // node中为undefined，因为node中this为{} 浏览器下为1
// 考虑函数有返回值的情况
function bar6(name, age) {
  return {
    value: this.value,
    name: name,
    age: age
  }
}
Function.prototype.call6 = function(context) {
  var context = context || window || {};
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}
bar5.call(null);
console.log(bar5.call6(foo3, 'kevin', 18));
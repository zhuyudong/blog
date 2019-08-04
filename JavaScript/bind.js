/**
 * bind 返回一个函数，可以传参，返回的函数如被new构造时，传入的this会失效，但参数有效
 */
var foo = {
  value: 1
}
function bar() {
  console.log(this.value)
}
var bindFoo = bar.bind(foo)
console.log(bindFoo()) // 1

// 1.
Function.prototype.bind1 = function(context) {
  // this 指向待执行的函数
  var self = this
  return function() {
    return self.apply(context)
  }
}
var bindFoo1 = bar.bind1(foo)
console.log(bindFoo1()) // 1

// 2
var foo2 = {
  value: 1
}
function bar2(name, age) {
  console.log(this.value)
  console.log(name)
  console.log(age)
}
// var bindFoo2 = bar2.bind(foo2, 'name'); // curring 传递
// bindFoo2(18); // 1 name 18
Function.prototype.bind2 = function(context) {
  var self = this
  var args = [].slice.call(arguments, 1)
  // var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var bindArgs = [].slice.call(arguments)
    // var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs))
  }
}
var bindFoo2 = bar2.bind2(foo2, "name")
bindFoo2(18) // 1 name 18

this.x = 9;
var module = {
  x: 81,
  getX: function() {
    console.log(this === global);
    console.log(this.x);
    return this.x;
  }
}
module.getX(); // 81

var retriveX = module.getX;
retriveX(); // node => undefined browser => 9

var boundGetX = retriveX.bind(module);
boundGetX(); // 81

/*-----------------------------------*/
// Partial Functions
function list() {
  return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3);
console.log(list1);
var leadingThirtysevenList = list.bind(undefined, 37);
var list2 = leadingThirtysevenList(); // [37]
console.log(list2);
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
console.log(list3);

/*-----------------------------------*/
// 配合 setTimeout
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}
LateBloomer.prototype.bloom = function() {
  setTimeout(this.declare.bind(this), 1000);
}
LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
}
var flower = new LateBloomer();
flower.bloom();


/**
 * 1. 调用函数
 * 2. 将类数组转换成数组对象
 * 3. 借用别人的方法
 * 4. 绑定this指向
 * 5. 继承
 * 6. 实现ES6 扩展运算符功能
 */
function foo() {
  console.log(this === window);
}
foo();
foo.call();
foo.apply();
foo.call(null);
foo.call(undefined);

// 借用别人的方法
const max = Math.max.apply(Math, [1, 2, 3, 4, 5]);

// 继承
const Father = function(name, age) {
  this.name = name;
  this.age = age;
}
const Student = function(name, age, high) {
  Father.call(this, name, age);
  this.high = high;
}
Student.prototype.message = function() {
  console.log('name: ' + this.name + ', age' + this.age + ', high' + this.high);
}
new Student('jordan', 12, '1.6m');

// 扩展运算符功能
(_console = console).log.call(_console, [1, 2, 3]);
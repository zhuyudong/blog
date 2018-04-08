// 工厂模式
function createPerson(name) {
  var o = new Object();
  o.name = name;
  o.getName = function() {
    console.log(this.name);
  }
  return o;
}
var person1 = createPerson('kevin');
person1.getName(); // kevin

// 构造函数模式
function Person(name) {
  this.name = name;
  this.getName = function() {
    console.log(this.name);
  }
}
var person2 = new Person('kevin');
person2.getName(); // kevin

// 构造函数模式优化
function Person1 (name) {
  this.name = name;
  this.getName = getName;
}
function getName() {
  console.log(this.name);
}
var person3 = new Person1('kevin');
person3.getName(); // kevin


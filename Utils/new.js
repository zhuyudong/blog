/* 模拟new的实现 */
// 构造函数有入参、返回值、原型prototype
function Otaku(name, age) {
  // this.strength = 60;
  this.age = age;
  this.name = name;
  // 返回基本类型或对象
  // return {
  //   name: name,
  //   habit: 'Games'
  // };
  // return 'return-string';
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourname = function() {
  console.log('I am ' + this.name);
}
// 如果构造函数有返回值，则person1是返回值
var person1 = new Otaku('kevin', 18);
console.log(person1.name); // kevin
console.log(person1.age); // 18
console.log(person1.strength); // 60
console.log(Object.getOwnPropertyNames(person1)); // [ 'age', 'name' ]
console.log(Object.getOwnPropertyNames(person1.__proto__)); // [ 'constructor', 'strength', 'sayYourname' ]
person1.sayYourname(); // I am kevin
// 模拟new：可以访问到构造器里的属性，访问到prototype中的属性
function objectFactory() {
  // console.log(arguments); // { '0': [Function: Otaku], '1': 'kevin', '2': 18 }
  // 生成一个新对象
  var obj = new Object();
  // 获取传参中的构造函数
  // shift 会改变原有数组
  var Constructor = [].shift.call(arguments);
  // console.log(Constructor); // [Function: Otaku]
  // 原型链指向构造函数的prototype
  obj.__proto__ = Constructor.prototype;
  // 执行构造函数
  var ret = Constructor.call(obj, arguments);
  // 判断构造函数是否有返回值
  // return obj;
  return typeof ret === 'object' ? ret : obj;
}
// 测试
var person2 = objectFactory(Otaku, 'kevin', 18);
var person2 = new Otaku('kevin', 18);
console.log(person2.name); // kevin
console.log(person2.age); // 18
console.log(person2.strength); // 60
console.log(Object.getOwnPropertyNames(person2)); // [ 'age', 'name' ]
console.log(Object.getOwnPropertyNames(person2.__proto__)); // [ 'constructor', 'strength', 'sayYourname' ]
person2.sayYourname(); // I am kevin


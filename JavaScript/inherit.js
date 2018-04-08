console.log(Object.getPrototypeOf(Object.prototype) === null); // true

/* 基于构造函数的继承 */
function Parent() {
  this.name = 'kevin';
}
Parent.prototype.getName = function() {
  console.log(this.name);
  return this.name;
}
function Child() {

}
Child.prototype = new Parent();
var child = new Child();

/* 基于原型链的继承 */

// 属性遮蔽（property shadowing）
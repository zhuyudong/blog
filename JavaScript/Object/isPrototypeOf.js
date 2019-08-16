function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

console.log(Bar); // [Function: Bar]
console.log(Baz); // [Function: Baz]
var baz = new Baz();

// 反应了原型继承的关系
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Function.prototype.isPrototypeOf(baz)); // false
console.log(Object.prototype.isPrototypeOf(baz)); // true

console.log(baz instanceof Baz); // true
console.log(baz instanceof Bar); // true
console.log(baz instanceof Foo); // true
console.log(baz instanceof Function); // false
console.log(baz instanceof Object); // true
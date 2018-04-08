// 所有对象都会从它的原型上继承一个constructor属性

var o = {};
console.log(o.constructor === Object); // true
var o1 = new Object;
console.log(o.constructor === Object); // true

var a = [];
console.log(a.constructor === Array); // true
var a1 = new Array;
console.log(a1.constructor === Array); // true

var n = new Number(3);
console.log(n.constructor === Number); // true

// 打印一个对象的构造函数
function Tree(name) {
  this.name = name;
}
var tree = new Tree('hello');
console.log(tree.constructor); // [Function: Tree]

function Type() {}
// 只有 true 1 'test' 不受影响，他们有只读的原生构造函数
var types = [
  new Array,
  [],
  new Boolean,
  true, // function Boolean() { [native code] },false,true
  new Date,
  new Error,
  new Function,
  function(){},
  Math,
  new Number,
  1, // function Number() { [native code] },false,1
  new Object,
  {},
  new RegExp,
  /(?:)/,
  new String,
  'test' // function String() { [native code] },false,test
];
for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
}
console.log(types.join('\n'));
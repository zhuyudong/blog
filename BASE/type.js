var num = 1;
var str = 'str';
var bool = true;
var sym = Symbol();
var nl = null;
var un = void 0;
var obj = {};
var func = function(){};
var reg = RegExp('\w');
var date = new Date();
var arr = [];
var error = new Error();

console.log(
  typeof num, 
  typeof str, 
  typeof bool, 
  typeof nl, 
  typeof un, 
  typeof sym, 
  typeof arr,
  typeof obj, 
  typeof func,
  typeof error,
  typeof date,
  typeof reg
); // number string boolean object undefined symbol object object function object object object

// Object.prototype.toString 规范 https://es5.github.io/#x15.2.4.2
var toString = Object.prototype.toString;
console.log(
  toString.call(un), // [object Undefined]
  toString.call(nl), // [object Null]
  toString.call(num), // [object Number]
  toString.call(bool), // [object Boolean]
  toString.call(str), // [object String]
  toString.call(sym), // [object Symbol]
  toString.call(arr), // [object Array]
  toString.call(obj), // [object Object]
  toString.call(func), // [object Function]   
  toString.call(reg), // [object RegExp]
  toString.call(date), // [object Date]
  toString.call(error), // [object Error]
  toString.call(Math), // [object Math]
  toString.call(JSON) // [object JSON]
);

// IE6中 toSting.call(undefined) 和 toString.call(null) 结果是 [object Object]

(function() {
  console.log(arguments); // {'0': 1, '1': 2, '2': 3}
  console.log(toString.call(arguments)); // [object Arguments]
})(1, 2, 3);

var class2Type = {};
'Boolean Number String Null Undefined Symbol Object Function Math JSON Date RegExp Arguments Error'.split(' ').map(function(item) {
  class2Type['[object ' + item + ']'] = item.toLowerCase();
});
function type(obj) {
  // 兼容IE6
  if (obj == null) {
    return obj + ''; // 'null' 或 'undefined'
  }
  return typeof obj === 'object' || typeof obj === 'function' ? class2Type[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
}

// 判断对象
function isFunction(obj) {
  return type(obj) === 'function';
}
// 判断数组
var isArray = Array.isArray || function(obj) {
  return type(obj) === 'array';
}

// 判断是否纯对象：通过 {} 或 new Object() 创建，或没有原型的对象 Object.create(null)
var hsOwnProperty = Object.prototype.hasOwnProperty;
function isPlainObject(obj) {

}

// 判断是否空对象
function isEmptyObject(obj) {
  for (var name in obj) {
    return false;
  }
  return true;
}
console.log(
  isEmptyObject({}), // true
  isEmptyObject([]), // true
  isEmptyObject(true), // true
  isEmptyObject(1), // true
  isEmptyObject('string'), // false
  isEmptyObject(null), // true
  isEmptyObject(undefined), // true
  isEmptyObject('') // true
);

// 判断是否window
function isWindow(obj) {
  return obj != null && obj === obj.window;
}

// 是否类数组对象: 数组、长度为0、lengths是属性大于0的数组、obj[length - 1] 存在
function isArrayLike(obj) {
  console.log(obj);
  var length = !!obj && 'length' in obj && obj.length;
  console.log(length);
  var typeRes = type(obj);
  if (typeRes === 'function' || isWindow(obj)) {
    return false;
  }
  // length === 0 为了兼容arguments是空{}
  // 类数组对象只能是 {0: 1, length: 1} 或 {a: 1, b: 2, length: 0} 这样的形式，且最后一个元素一定存在
  return typeRes === 'array' || length === 0 || 
      typeof length === 'number' && length > 0 && (length - 1) in obj;
}

(function() {
  console.log(isArrayLike(arguments)); // {} 0 true
})();
(function() {
  console.log(isArrayLike(arguments)); // {'0': 1, '1': 2, '2': 3} 3 true
})(1, 2, 3);
(function() {
  console.log(isArrayLike({a: 1, b: 2, length: 0})); // { a: 1, b: 2, length: 0 } 0 true
})();

// 判断类数组的另一种实现
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var arrayLike = function(collection) {
  var length = getLength(collection);
  return typeof length === 'number' && lenght >= 0 && lenght <= MAX_ARRAY_INDEX;
}

// 判断是否dom节点
var isElement= function(obj) {
  return !!(obj && obj.nodeType === 1);
}

var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;
function isPlainObject(obj) {
  var proto, Ctor;
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false;
  }
  proto = Object.getPrototypeOf(obj);
  if (!proto) {
    return true;
  }
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}
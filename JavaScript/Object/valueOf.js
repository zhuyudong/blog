var arr = ['abc', true, 12, -5];
console.log(arr.valueOf()); // [ 'abc', true, 12, -5 ]
console.log(arr.valueOf() === arr); // true

var date = new Date(2013, 7, 18, 23, 11, 59, 230);
console.log(date.valueOf()); // 1376838719230

var num = 15.26540;
console.log(num.valueOf()); // 15.2654

var bool = true;
console.log(bool.valueOf()); // true

var newBool = new Boolean(true);
console.log(newBool.valueOf()); // true
console.log(newBool.valueOf() == newBool); // true
// 前者是 boolean 类型，后者是 object 类型
console.log(newBool.valueOf() === newBool); // false

function foo() {}
console.log(foo.valueOf()); // [Function: foo]
console.log(foo.valueOf() === foo); // true
var foo2 = new Function('x', 'y', 'return x + y');
console.log(foo2.valueOf()); // [Function: anonymous]
console.log(foo2.valueOf() === foo2); // true

var obj = { name: '张三', age: 18 };
console.log(obj); // { name: '张三', age: 18 }
console.log(obj.valueOf() === obj); // true

var str = 'http://precisecare.jiukangyun.com';
console.log(str.valueOf() === str); // true

var str2 = new String('http://precisecare.jiukangyun.com');
console.log(str2.valueOf()); // http://precisecare.jiukangyun.com
console.log(str2.valueOf() === str2); // false

// 改写valueOf
function MyNumberType(n) {
  this.number = n;
}
MyNumberType.prototype.valueOf = function() {
  return this.number;
}
var myNumber = new MyNumberType(3);
// 默认调用 valueOf()
console.log(myNumber + 1); // 4
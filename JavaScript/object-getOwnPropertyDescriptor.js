var o, d;
o = {
  get foo() {
    return 17;
  }
}
d = Object.getOwnPropertyDescriptor(o, 'foo');
console.log(d);
/**
 * { get: [Function: get foo],
  set: undefined,
  enumerable: true,
  configurable: true }
 */

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, 'bar');
console.log(d);
/**
 * { value: 42,
  writable: true,
  enumerable: true,
  configurable: true }
 */

 o = {};
 Object.defineProperty(o, 'baz', {
   value: 86729,
   // writable: false,
   // enumerable: false
 });
 d = Object.getOwnPropertyDescriptor(o, 'baz');
 console.log(d);
 /**
  * { value: 86729,
  writable: false,
  enumerable: false,
  configurable: false }
  */

  // Object.getOwnPropertyDescriptor('foo', 0);
  // 类型错误: "foo" 不是一个对象  // ES5 code
  
  // Object.getOwnPropertyDescriptor('foo', 0);
  // Object returned by ES2015 code: {
  //   configurable: false,
  //   enumerable: true,
  //   value: "f",
  //   writable: false
  // }
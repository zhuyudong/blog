var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // [ 'bar', 42 ]

// 类数组对象
var obj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj1)); // [ 'a', 'b', 'c' ]

// 不能将内置对象扩展成数组
var obj2 = { 0: 'a', 1: 'b', 2: { 3: 'c' , 4: 'd' } };
console.log(Object.values(obj2)); // [ 'a', 'b', { '3': 'c', '4': 'd' } ]

// 随机键值
var an_obj = {100: 'a', 2: 'b', 7: 'c'};
console.log(Object.values(an_obj)); // [ 'b', 'c', 'a' ]

// 不可枚举属性
var my_obj = Object.create({}, { getFoo: { value: function() {
  return this.foo;
}}});
my_obj.foo = 'bar';
console.log(my_obj); // { foo: 'bar' }
console.log(Object.values(my_obj)); // [ 'bar' ]

// 参数是非对象会转变成对象
console.log(Object.values('foo')); // [ 'f', 'o', 'o' ]
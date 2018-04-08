// 对象函数调用
var obj = {
  a: 'this is obj',
  test: function() {
    console.log(this.a); // this is obj
  }
}
obj.test();

// “单纯”函数调用
var a = 'this is window';
function test() {
  console.log(this.a);
}
test();
// 浏览器环境 => this is window
// node环境下 => undefined

// 构造函数调用
function Test() {
  this.a = 'this is test';
  console.log(this.a); 
  console.log(this); // Window {}
}
Test();
// browser => this is test
// browser => Window {}
// node => this is test
// node => global {}
var test = new Test();
// node => this is test
// node => Test { a: 'this is test' }
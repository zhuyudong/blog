/**
 * 通过export导出的值是一样的，不同的脚本加载得到结果一样
 */
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

export let obj = {};

function C() {
  this.sum = 0;
  this.add = function() {
    this.sum += 1;
  }
  this.show = function() {
    console.log(this.sum);
  }
}

export let c = new C();

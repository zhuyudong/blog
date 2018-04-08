// ?: 表示可选参数，否则必填
function add(n1:number, n2?:number):number {
  return n1 + n2;
}
add(1, 1);
// add();
// add(1);
// add(1, 1, 1);

// 默认值
function deci(n1:number, n2:number = 10) {
  return n1 + n2;
}

// 剩余参数
function func(...foo:number[]):number {
  let sum = 0;
  for (let i = 0; i < foo.length; i++) {
    sum += foo[i];
  }
  return sum;
}

// 函数声明
// 函数表达式
// 箭头函数
(a:number, b:number):number => {
  return a + b;
}
// 箭头表达式
// 给箭头函数加上名字
var add1:(n1:number, n2:number) => number = function(n1:number, n2:number):number {
  return n1 + n2;
}


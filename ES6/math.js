
// 没有原型对象
Object.getOwnPropertyNames(Math);
/*
[ 'abs',
  'acos',
  'acosh',
  'asin',
  'asinh',
  'atan',
  'atanh',
  'atan2',
  'ceil',
  'cbrt',
  'expm1',
  'clz32',
  'cos',
  'cosh',
  'exp',
  'floor',
  'fround',
  'hypot',
  'imul',
  'log',
  'log1p',
  'log2',
  'log10',
  'max',
  'min',
  'pow',
  'random',
  'round',
  'sign',
  'sin',
  'sinh',
  'sqrt',
  'tan',
  'tanh',
  'trunc',
  'E',
  'LN10',
  'LN2',
  'LOG10E',
  'LOG2E',
  'PI',
  'SQRT1_2',
  'SQRT2' ]
*/
// 去除小数部分
Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}
// 判断正数、负数，返回+1、-1、+0、-0、NaN
Math.sign = Math.sign || function(x) {
  x = +x; // convert to a number   -0会被转为-0
  if (x === 0 || isNaN(x)) { // 0 === -0  0 === +0
    return x;
  }
  return x > 0 ? 1 : -1;
}
// 计算立方根
Math.cbrt = Math.cbrt || function(x) {
  var y = Math.pow(Math.abs(x), 1/3);
  return x < 0 ? -y : y;
};
// 返回 e^x - 1
Math.expm1 = Math.expm1 || function(x) {
  return Math.exp(x) - 1;
};
// 返回1 + x的自然对数
Math.log1p = Math.log1p || function(x) {
  return Math.log(1 + x);
};
// 返回以 10 为底的x的对数
Math.log10 = Math.log10 || function(x) {
  return Math.log(x) / Math.LN10;
};
// 返回以 2 为底的x的对数
Math.log2 = Math.log2 || function(x) {
  return Math.log(x) / Math.LN2;
};
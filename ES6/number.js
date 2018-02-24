Object.getOwnPropertyNames(Number.prototype);
/*
[ 'constructor',
  'toExponential',
  'toFixed',
  'toPrecision',
  'toString',
  'valueOf',
  'toLocaleString' ]
*/
Object.getOwnPropertyNames(Number);
/*
[ 'length',
  'name',
  'prototype',
  'isFinite',
  'isInteger',
  'isNaN',
  'isSafeInteger',
  'parseFloat',
  'parseInt',
  'MAX_VALUE',
  'MIN_VALUE',
  'NaN',
  'NEGATIVE_INFINITY',
  'POSITIVE_INFINITY',
  'MAX_SAFE_INTEGER',
  'MIN_SAFE_INTEGER',
  'EPSILON' ]
*/
// Number.isFinite 与 全局 isFinite 区别
isFinite('25'); // true
Number.isFinite('25'); // false
// Number.isNaN 与 全局 isNaN 区别
isNaN('NaN'); // true
Number.isNaN('NaN'); // false

Number.isSafeInteger = function(n) {
  return (typeof n === 'number' && 
    Math.round(n) === n &&
    Number.MAX_SAFE_INTEGER >= n &&
    Number.MIN_SAFE_INTEGER <= n
  );
}
Number.isSafeInteger(9007199254740993 - 990); // 要确保每个参数都是安全范围内的
function trusty(left, right, result) {
  if (
    Number.isSafeInteger(left) && 
    Number.isSafeInteger(right) && 
    Number.isSafeInteger(result)
  ) {
    return result;
  }
  throw new RangeError('Operation cannot be trusted!');
}
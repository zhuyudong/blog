Object.getOwnPropertySymbols(Symbol.prototype);
/**
 * [ Symbol(Symbol.toStringTag), Symbol(Symbol.toPrimitive) ]
 */
Object.getOwnPropertyNames(Symbol); 
/*
[ 'length',
  'name',
  'prototype',
  'for',
  'keyFor',
  'hasInstance',
  'isConcatSpreadable',
  'iterator',
  'match',
  'replace',
  'search',
  'species',
  'split',
  'toPrimitive',
  'toStringTag',
  'unscopables' ]
 */
Object.getOwnPropertyNames(Symbol.prototype);
/**
 [ 'constructor', 'toString', 'valueOf' ]
 */
Reflect.ownKeys(Symbol.prototype);
/**
 [ 'constructor',
  'toString',
  'valueOf',
  Symbol(Symbol.toStringTag),
  Symbol(Symbol.toPrimitive) ]
 */
Reflect.ownKeys(Symbol);
/*
[ 'length',
  'name',
  'prototype',
  'for',
  'keyFor',
  'hasInstance', 会在使用 instanceof 时自动调用
  'isConcatSpreadable', 使用 Array.prototype.concat() 是否可以展开
  'iterator', 对对象使用for...of时调用
  'match', String.prototype.match
  'replace', String.prototype.replace
  'search',
  'species',
  'split', String.prototype.split
  'toPrimitive',
  'toStringTag', 调用Object.prototype.toString() 方法时调用
  'unscopables' ]
 */
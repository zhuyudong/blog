Object.getOwnPropertyNames(RegExp);
/**
 [ 'length',
  'name',
  'prototype',
  'input',
  '$_',
  'lastMatch',
  '$&',
  'lastParen',
  '$+',
  'leftContext',
  '$`',
  'rightContext',
  '$\'',
  '$1',
  '$2',
  '$3',
  '$4',
  '$5',
  '$6',
  '$7',
  '$8',
  '$9' ]
 */
Object.getOwnPropertyNames(RegExp.prototype);
/*
[ 'constructor',
  'exec',
  'flags',
  'global',
  'ignoreCase',
  'multiline',
  'source',
  'sticky',
  'unicode',
  'compile',
  'toString',
  'test' ]
*/

/**
 * String.prototype.match 调用 RegExp.prototype[Symbol.match]
 * String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
 * String.prototype.search 调用 RegExp.prototype[Symbol.search]
 * String.prototype.split 调用 RegExp.prototype[Symbol.split]
 */
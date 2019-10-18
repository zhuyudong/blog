// https://github.com/moroshko/shallow-equal
/**
 * 技术栈：mocha、chai、nyc
 * index.js
 * export { default as shallowEuqalArrays } from './arrays'
 * export { default as shallowEuqalObjects } from './objects'
 */
function shallowEuqalArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true
  }

  if (!arrA || !arrB) {
    return false
  }

  var len = arrA.length

  if (arrB.length !== len) {
    return false
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false
    }
  }
  return true
}

function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true
  }

  if (!objA || !objB) {
    return false
  }

  var aKeys = Object.keys(objA)
  var bKeys = Object.keys(objB)
  // var len = aKeys.length

  if (aKeys.length !== bKeys.length) {
    return false
  }

  // for (var i = 0; i < len; i++) {
  //   var key = aKeys[i]

  //   if (objA[key] !== objB[key]) {
  //     return false
  //   }
  // }
  for (var key of aKeys) {
    if (objA[key] !== objB[key]) {
      return false
    }
  }

  return true
}

//github.com/axios/axios/blob/master/lib/utils.js
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return
  }

  if (typeof obj !== "object") {
    obj = [obj]
  }

  if (Array.isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj)
    }
  } else {
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj)
      }
    }
  }
}
function merge() {
  const result = {}
  function assignValue(val, key) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = merge(result[key], val)
    } else {
      result[key] = val
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue)
  }
  return result
}
function deepMerge() {
  const result = {}
  function assignValue(val, key) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = deepMerge(result[key], val)
    } else if (typeof val === "object") {
      result[key] = deepMerge({}, val)
    } else {
      result[key] = val
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue)
  }
  return result
}
function bind(fn, thisArg) {
  return function wrap() {
    let args = new Array(arguments.length)
    for (let i = 0, l = args.length; i < l; i++) {
      args[i] = arguments[i]
    }
    return fn.apply(thisArg, args)
  }
}
function extand(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind(val, thisArg)
    } else {
      a[key] = val
    }
  })
  return a
}

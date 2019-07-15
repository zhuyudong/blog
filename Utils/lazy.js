// 惰性函数，即只执行一次
let foo = function() {
  let t = new Date()
  foo = function() {
    return t
  }
  return foo()
}

console.log(foo())
console.log(foo())

function addEvent1(type, el, fn) {
  if (window.addEventListener) {
    addEvent1 = function(type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent1 = function(type, el, fn) {
      el.attachEvent("on" + type, fn)
    }
  }
}

// 闭包
const addEvent2 = (function() {
  if (window.addEventListener) {
    return function(type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    return function(type, el, fn) {
      el.attachEvent("on" + type, fn)
    }
  }
})()

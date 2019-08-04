// https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md#%E7%AC%AC-1-%E9%A2%98%E5%86%99-react--vue-%E9%A1%B9%E7%9B%AE%E6%97%B6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%9C%A8%E5%88%97%E8%A1%A8%E7%BB%84%E4%BB%B6%E4%B8%AD%E5%86%99-key%E5%85%B6%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88

/* 2
// parseInt 接收两个参数
['1', '2', '3'].map(parseInt) // -> [1, NaN, NaN]
//*/

/* 3
// 防抖：触发高频事件后n秒内函数只执行一次，如果n秒内高频事件再次触发，则重新计算时间
function debounce(fn, ms) {
  let timeout = null
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, ms)
  }
}
function sayHi() {
  console.log('防抖成功')
}
var inp = document.getElementById('inp')
inp.addEventListener('input', debounce(sayHi, 500))

// 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle(fn, ms) {
  let canRun = true
  return function() {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.call(this. arguments)
      canRun = true
    }, ms)
  }
}
//*/

/* 38
// 隐式类型转换
var a = {
  i: 1,
  // 重写toString方法
  toString() {
    return a.i++
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}
//*/

/* 39
BFC 块级格式上下文，独立容器，里面的元素和外部相互不影响
生成方式：
body 根元素
浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed)
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)
作用：
1. 清除浮动
2. 防止同一BFC容器中的相邻元素间的外边距重叠问题
//*/

/* 41
var a = 10;
(function () {
    console.log(a) // -> undefined
    a = 5
    console.log(window.a) // -> 10
    var a = 20;
    console.log(a) // -> 20
})()
//*/

/* 42
const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}
sleep(1000).then(() => {

})
//*/

/* 43
// 默认的排序方法会将数组元素转为字符串后用字符串中的UTF-16编码来排序
console.log([3, 15, 8, 29, 102, 22].sort()) // -> [ 102, 15, 22, 29, 3, 8 ]
console.log([3, 15, 8, 29, 102, 22].sort((a, b) => a - b)) // -> [ 3, 8, 15, 22, 29, 102 ]
//*/

/* 44
https 握手过程
http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html
https://developers.weixin.qq.com/community/develop/article/doc/000046a5fdc7802a15f7508b556413
TLS/SSL基本思路是采用公钥加密算法，向server要公钥，然后用公钥加密，server用私钥解密
将公钥放进证书中，证书的可信来保证公钥的可信
双方协商生成对话密钥
双方使用对话密钥加密通信
握手阶段：
1. ClientHello
  1.1 支持的协议版本，如TLS 1.0
  1.2 一个客户端生成的随机数，稍后用于生成”对话密钥“
  1.3 支持的加密方法，如RSA公钥加密
  1.4 支持的压缩方法
2. ServerHello 
  2.1 确认使用的加密通信协议版本
  2.2 一个服务器生成的随机数，稍后用于生成”对话密钥“
  2.3 确认使用的加密方法
  2.4 服务器证书（公钥+CA数字签名）
  [2.5 要求客户端证书] 
3. 客户端回应
  3.1 验证证书，有效性，域名，如过期则向提示警告是否继续
  3.2 从证书中取出公钥
  3.3 发出随机数、编码改变通知（随后双方的加密方法和密钥发送）
  3.4 客户端握手结束通知（前面所有内容的hash值，用来供服务器校验）
4. 服务端最后回应
  4.1 编码改变通知
  4.2 服务器握手结束，内容是前序所有内容的hash值，供客户端校验

加密通信阶段（使用会话密钥加密）：

//*/

/* 45
https 握手过程中，客户端验证证书的合法性
1. 客户端内置的信任的根证书或信任根的二级证书机构颁发，以及有效性（系统时间）
2. 通过CRL或OCSP的方式验证证书是否被吊销
3. 证明对方是否持有证书的对应的私钥，判断证书的网站域名是否与证书颁发的域名一致
//*/

/* 46
var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push
}
obj.push(1)
obj.push(2)
// 伪数组 [,,1,2]
console.log(obj) // {2: 1, 3: 2, length: 4, splice: [Function: splice], push: [Function: push]}
//*/

/* 48
// https://github.com/noneven/__/issues/6
// call、apply哪个性能好
call 接收参数是函数内部正好需要的格式，性能更好
//*/

/* 49
// 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片?
1. 没有跨域问题
2. 不会阻塞页面加载
3. gif体积小（相比png/jpg）
4. 触发get请求后不需要获取和处理数据，服务器也不需要发送数据
5. 比 XMLHttpRequest 性能好
///*

//*/

/* 50
// 实现 (5).add(3).minus(2)
Number.prototype.add = function(n) {
  if (typeof n !== 'number') {
    throw new Error('请输入数字')
  }
  return this + n
  // return this.valueOf() + n
}
Number.prototype.minus = function(n) {
  if (typeof n !== 'number') {
    throw new Error('请输入数字')
  }
  return this - n
  // return this.valueOf() - n
}
//*/


/* 95
function deepClone(obj, hash = new WeakMap()) {
  if (hash.has(obj)) return obj
  var cobj
  if (obj === null) return obj
  let t = typeof obj
  switch (t) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return obj
  }

  if (Array.isArray(obj)) {
    cobj = []
    obj.forEach((c, i) => {
      cobj.push(deepClone(obj[i]))
    })
  } else {
    cobj = {}
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      Object
        .getOwnPropertyNames(obj)
        .concat(Object.getOwnPropertySymbols(obj))
        .forEach(c => {
          hash.set(obj, obj)
          cobj[c] = deepClone(obj[c], hash)
        })
    } else {
      cobj = obj
    }
  }
  return cobj
}
//*/

/* 96
加密：前端Base64、Unicode + 1，后端解开后MD5/MD6后存入数据库
前端使用MD5/MD6之类的取Hash，后端存 Hash的 Hash
使用HTTPS
//*/

/* 107
// 从巨大数组中随机获取部分数据
const MAXMUM = 10000
const UID_COUNT = 100000
function random_with_set() {
  let set = new Set()
  while (true) {
    if (set.size > MAXMUM - 1) break
    let tmp = parseInt(Math.random() * UID_COUNT, 10)
    if (set.has(tmp)) continue
    set.add(tmp)
  }
  return Array.from(set)
}
console.log(random_with_set())
//*/

///*

//*/

///*
// 不使用四则运算计算两数之和
function sum(a, b) {
  if (a === 0) return b
  if (b === 0) return a
  let newA = a ^ b // 不进位加法
  let newB = (a & b) << 1
  return sum(newA, newB)
}
//*/

function checkArray(array) {
  if (!array || array.length < 2) return
}
function swap(array, left, right) {
  let rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}
// 冒泡排序 时间复杂度 n + n - 1 + n - 2 + 1，即o(n*n)
function bubble(array) {
  checkArray(array)
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) swap(array, j, j + 1)
    }
  }
  return array
}

function insertion(array) {
  checkArray(array)
  for (let i = 1, length = array.length; i < length; i++) {
    for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
      swap(array, j, j + 1)
    }
  }
  return array
}

// 最长递增子序列
// [0, 3, 4, 17, 2, 8, 6, 10] 0, 3, 4, 8, 10
function list(n) {
  if (n.length === 0) return 0
  let array = new Array(n.length).fill(1)
  for (let i = 1; i < n.length; i++) {
    for (let j = 0; j < i; j++) {
      if (n[i] > n[j]) {
        array[i] = Math.max(array[i], 1 + array[j])
      }
    }
  }
  let res = 1
  for (let i = 0; i < array.length; i++) {
    res = Math.max(res, array[i])
  }
}
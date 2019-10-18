babel-node --presets @babel/preset-env -- file.js

[rxjs](https://rxjs.dev/api)
[RxJS](https://rxjs-dev.firebaseapp.com/)
[学习RxJS操作符](https://rxjs-cn.github.io/learn-rxjs-operators/about/)
[Launchpad](https://reactive.how/rxjs/mapping)
[RxJS Marbles](https://rxmarbles.com/#from)
[rxdb](https://github.com/pubkey/rxdb)
[MarbleDiagram](https://github.com/LeeCampbell/MarbleDiagram/blob/master/LinqPad/ReadMe.md)

从物理世界来抽象河流：
  三江源（create）
  自来水厂（subscribe）
  合流（concat、zip）
  大坝（backpressure、debounce、throttle）
  捕捞（filter）
  工厂（map、pluck）
哪些操作符在 `rxjs` 下直接导出，哪些在 `rxjs/operators` 下
所有操作符都返回 `Observable` 类型吗
哪些是静态方法，哪些是实例方法，哪些两者都有
rxjs-compat
概念：Observable、Observabled
不执行subscribe()是否就不生成数据
哪些是异步的
pipe()一定要返回observable对象

## 宝石图
![](http://p9.pstatp.com/large/pgc-image/d6fb80ae3e90491d99721e5f6c81e91a)

## 创建器
### of - 单一值转为流
![](http://p1.pstatp.com/large/pgc-image/f69243a9cec647e9aa5a73a4cfab0bad)

### from - 数组转为流
![](http://p3.pstatp.com/large/pgc-image/a6da21633a7c453d97fe92ac9ff30ece)

### range - 范围转为流
![](http://p3.pstatp.com/large/pgc-image/fd7fbc2929ea420caff08455d299153a)

### fromPromise - Promise 转为流
![]()

### defer - 惰性创建流
![](http://p1.pstatp.com/large/pgc-image/d789775e05a14ddfa43344952fb4d564)

### timer - 定时器流
![](http://p3.pstatp.com/large/pgc-image/c6ca7834e2c043eca3b3d14f37b8c95d)

### interval - 定时器流
![](http://p3.pstatp.com/large/pgc-image/c48951b3dfb64055b96683430cc6aeeb)

## Subject - 主体对象

## 合并创建器
### merge - 并联
![](http://p1.pstatp.com/large/pgc-image/3f86bf89d33e404891805dc6ebed230c)

### concat - 串联
![](http://p3.pstatp.com/large/pgc-image/987a0a76e4d14d4998bd2c6b27826920)

### zip - 拉链
![](http://p9.pstatp.com/large/pgc-image/e1f0453f0bbd47d8bff52a47092be728)

### retry - 失败时重试
![](http://p1.pstatp.com/large/pgc-image/60e436135b0b43098bf1fe5baf1f3379)

### repeat - 成功时重试
![](http://p1.pstatp.com/large/pgc-image/0dd7594572d443d9b79732aba8cfd949)

### delay - 延迟
![](http://p3.pstatp.com/large/pgc-image/357ae46f00234c6faafa363c41cdf936)

### toArray - 收集为数组
![](http://p1.pstatp.com/large/pgc-image/af6c09a6f587461fa61c9ac7c1d8c88a)

### debounceTime - 防抖
![](http://p1.pstatp.com/large/pgc-image/af6c09a6f587461fa61c9ac7c1d8c88a)

### switchMap - 切换成另一个流
![](http://p3.pstatp.com/large/pgc-image/d74e77edc0ef48839c5f733bc57758ed)
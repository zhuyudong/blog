### DOM 事件的级别
DOM0  
`element.onclick = function(){}`  
DOM2  
`element.addEventListener('click, function(){}, false)`  
`element.attchEvent('onclick', function(){}, false)`  
DOM3，相比DOM2增加了鼠标、键盘等诸多事件   
`element.addEventListener('keyup', function(){}, false)`  

### DOM 事件模型
捕获、冒泡

### DOM 事件流
捕获——>目标阶段——>冒泡

### DOM 事件捕获的具体流程
`document.documentElement` 获取html
`document.body` 获取body
window——>document——>html——>body——>目标阶段——>...——>window  
```js
event.preventDefault() // 组织默认事件
event.stopPropagation() // 组织冒泡
event.stopImmediatePropagation() // 一个元素绑定了两个同类型事件，在一个事件监听中组织另一个同类型事件监听的执行
event.cuurentTarget() // 父级元素事件
event.target() // 目标元素事件
```

### Event对象的常见应用

### 自定义事件
```js
var eve = new Event('custome');
ev.addEventListener('custome', function() {
  console.log('custome');
});
ev.dispatchEvent(eve);

// CustomEvent 自定义事件，还可以传参数
```
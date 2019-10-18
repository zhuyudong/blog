跨域手段：jsonp、iframe、cors、img、HTML5 postMessage

### iframe

- 跨域完成之后 DOM 操作和互相之间 JavaScript 调用没问题
- URL 传参有数量限制
- 母页面和 iframe 间有安全限制

### script

- 直接返回 json 格式数据，方便处理
- 只能 get 请求

### img

- 可以访问任何 url
- 不能响应文本，只能监听是否响应

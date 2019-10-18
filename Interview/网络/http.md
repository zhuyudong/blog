浏览器 DNS 缓存
chrome://net-internals/#dns

递归查询本机 DNS 配置
cat /etc/resolv.conf
迭代查询 DNS
dig +trace baidu.com

DNS 采用 53 端口进行 UDP 明文通信，有 DNS 欺骗、DNS Cache 污染、DNS 放大攻击等问题
使用 DNSSec（Domain Name System Security Extensions）DNS 安全扩展

[短网址生成](https://github.com/liucong1/shortLink)

[Ajax 最全讲解](https://gitbook.cn/books/5d36650449d34549299fbe85/index.html)
[axios 中 JSONP](https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp)
XMLHTTpRequest

- 定义
- 属性
  - readyState
    - 0 创建对象
    - 1 请求头执行
    - 2 请求体执行
    - 3 接收响应头完成，开始接收响应体
    - 4 响应完成
  - responseText: string
  - responseXML: Document
  - responseText
  - status http 状态码
  - statusText: "OK" http 状态描述
  - withCredentials: boolean
  - timeout
  - responseType: json | blob | stream
- 方法
  - abort()
  - getAllResponseHeaders()/getResponseHeader()
  - open(method, url, async, username, password)
  - setRequestHeader('Content-Type': format)
    - text/plain
    - application/json
    - application/x-www-form-urlencoded 浏览器 form 表单， 默认
    - multipart/form-data
  - send(data)
- 事件
  - onreadystatechange: readyState
  - ontimeout
  - onprogress
- [版本](http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html)

Ajax（Asynchronous JavaScript and XML ）封装

- jQuery
- fetch
- axios

跨域方式：

- JSONP
- CORS
- 反向代理
- WebSockets
- document.domain + iframe
- window.name + iframe
- 片段识别符

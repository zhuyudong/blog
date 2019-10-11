双向绑定
设计模式
生命周期
源码

设计模式  
<img src="观察者模式.png" width="500" />

- 业务能力
  - 我做过什么业务？
  - 负责的业务有什么业绩？
  - 使用了什么技术方案？
  - 突破了什么技术难点？
  - 遇到了什么问题？
  - 最大的收获是什么？
- 团队协作能力
- 事务推动能力
- 带人能力
- 其他能力

GET 在浏览器回退是无害的，而 POST 会再次提交请求
GET 产生的 URL 地址可以被隐藏，而 POST 不可以
GET 请求会被浏览器主动缓存，而 POST 不会，除非手动设置
GET 只能 url 编码，而 POST 支持多种编码方式
GET 请求参数会完整地保留在浏览器历史记录中，而 POST 不会
GET 请求 URL 长度有限制，大概 2kb，而 POST 没有
参数的数据类型，GET 只接受 ASCII 字符，而 POST 没有限制

管线化机制通过持久机制完成，仅 HTTP/1.1 支持此技术
只有 GET 和 HEAD 请求可以进行管线化，而 POST 则有所限制
初次创建连接时不应启动管线机制，因为对方的不一定支持
管线化不影响到来的顺序，响应返回的顺序并未改变
HTTP/1.1 要求服务器支持管线化，但不要求服务器也对响应进行管线化处理，只是要求对管线化的请求不失败即可
Chrome 和 Firefox 默认未开启管线化，因为对性能提升并不明显

Characters ——> Tokens ——> Nodes ——> CSSOM 内联样式 HTML tree
触发 Reflow：
增加、删除、修改 DOM 节点时
移动 DOM 位置、动画时
修改 CSS 样式时
Resize 窗口时（移动端没有这个问题）
修改网页默认字体时

document.createDocumentFragment 避免频繁 reflow 和 repaint

面向对象

类的声明
生成实例
如何实现继承
继承的几种方式

### BFC

根元素
float 值不为 none
overflow 不为 visible
display 值为 inline-block、table-cell、table-caption
position 值为 absolute 或 fixed

requestFullScreen()
animation-play-state: running | paused

const dragUpload = document.getElementById('dragUpload')
// 必须
dragUpload.addEventListener('dragover', (e) => {
e.preventDefault()
})
dragUpload.addEventListener('drop', (e) => {
e.preventDefault()
const { dataTransfer: {files = {}} = {}} = e || {}
})
自定义鼠标样式
cursor: url(),auto
截图：html2canvas、canvas2image
Cascading Style Sheets
transform: translateZ(0) 开启 GPU 加速
html = html.replace(/>\s*(\S*)\s\*</g, '>\$1<') 去除 html 空格
frame 需要指定 DTD Frameset 需要配合 frameset 使用，是整个网页的框架
iframe 无需指定 DTD，可以直接使用，且是内嵌的框架
work.terminate() 终止 webwork
富文本编辑器
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
arr.flat(Infinity) 拍平数组
123
115
117
119 https://github.com/haizlin/fe-interview/issues/1060
TDK
字符同态 https://github.com/haizlin/fe-interview/issues/1011
video、audio、embed、track、source、canvas、picture、marquee
calc(~'100% - 36px')
101
移动 0.5px 边框 https://github.com/haizlin/fe-interview/issues/1002

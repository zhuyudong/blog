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


GET在浏览器回退是无害的，而POST会再次提交请求
GET产生的URL地址可以被隐藏，而POST不可以
GET请求会被浏览器主动缓存，而POST不会，除非手动设置
GET只能url编码，而POST支持多种编码方式
GET请求参数会完整地保留在浏览器历史记录中，而POST不会
GET请求URL长度有限制，大概2kb，而POST没有
参数的数据类型，GET只接受ASCII字符，而POST没有限制

管线化机制通过持久机制完成，仅HTTP/1.1支持此技术
只有GET和HEAD请求可以进行管线化，而POST则有所限制
初次创建连接时不应启动管线机制，因为对方的不一定支持
管线化不影响到来的顺序，响应返回的顺序并未改变
HTTP/1.1 要求服务器支持管线化，但不要求服务器也对响应进行管线化处理，只是要求对管线化的请求不失败即可
Chrome和Firefox默认未开启管线化，因为对性能提升并不明显

Characters ——> Tokens ——> Nodes ——> CSSOM  内联样式HTML tree
触发Reflow：
增加、删除、修改DOM节点时
移动DOM位置、动画时
修改CSS样式时
Resize窗口时（移动端没有这个问题）
修改网页默认字体时

document.createDocumentFragment 避免频繁reflow和repaint

面向对象

类的声明
生成实例
如何实现继承
继承的几种方式

### BFC
根元素
float值不为none
overflow不为visible
display值为inline-block、table-cell、table-caption
position值为absolute或fixed
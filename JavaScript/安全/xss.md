XSS利用的是用户对指定网站的信任
持久型XSS，主动提交恶意数据到服务器，恶意用户的HTML或JS输入数据库——>进入数据库——>服务器响应时查询数据库——>用户浏览器
反射型XSS，诱骗用户点击URL（可能伪装成短链接）带攻击代码的链接，服务器解析后响应，在返回的相应内容中隐藏和嵌入攻击者的XSS代码，被浏览器执行，从而攻击用户
DOM-based XSS，取决于输出位置，并不取决于输出环境


1. 使用XSS Filter
2. 使用HttpOnly Cookie
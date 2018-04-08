app.env
app.proxy
app.subdomainOffset
app.keys 设置签名的cookie秘钥
app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeysGrip(['im a newer secret', 'i like turtle'], 'sha'256');
ctx.cookies.set('name', 'tobi', { signed: true });
app.context 是从其创建ctx的原型
为app.context添加属性
app.context.db = db();
app.use(async ctx => {
  console.log(ctx.db);
});
app.silent为true 表示错误不输出到stderr，当err.status 是404 或 err.expose 是true时也不会输出错误
app.on('error', (err, ctx) => {
  log.error('serer error', err);
});
req/res 出现错误，且无法响应客户端，context实例仍然被传递


koa可以将多个koa应用程序组装在一起
app.listen(300) 是 http.createServer(app.callback()).listen(3000)的语法糖
组装多个应用程序
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3000);

app.callback()方法的回调函数接收req res来处理请求

ctx上很多属性都是通过getter setter defineProperty() 来定义的，只能通过 app.context 使用 Object.defineProperty 来编辑这些属性（不推荐）

ctx.type 和 ctx.length 委托给 response 对象
ctx.path 和 ctx.method 委托给 request 对象
ctx.req ctx.res 是node的请求响应对象，绕过koa的response处理时不被支持的，应避免使用如下属性 res.statusCode res.writeHead() res.write() res.end()
ctx.request 和 ctx.response 是koa对象
ctx.state.user = await User.find(id) 命名空间
ctx.app 应用程序实例引用
ctx.cookies.get(name, [options]) 使用cookies模块
ctx.cookies.set(name, value, {
  maxAge: Date.now(),
  signed: ,
  path:
  domain:,
  secure: ,
  httpOnly:,
  overwrite:  是否覆盖以前设置的同名cookie（默认false）
});
ctx.throw([status], [msg], [properties]) 使用 http-errors 来创建错误
ctx.throw(400, 'name require') 等效于 const err = new Error('name require'); err.status = 400; err.expose = true; throw err;
ctx.assert(ctx.state.user, 401, 'User not found. Please login!'); 使用 http-assert 做断言
ctx.respond = false; 绕过koa 处理 response（不支持，破坏预期）
Request别名：
ctx.header
ctx.headers
ctx.method ctx.method=
ctx.url ctx.url=
ctx.originalUrl
ctx.orgin
ctx.href
ctx.path ctx.path=
ctx.query ctx.query=
ctx.queryString ctx.queryString=
ctx.host ctx.hostName
ctx.fresh 用于If-None-Match/ETag 和 If-Modified-Since/Last-Modified
ctx.stale 与ctx.fresh 相反
ctx.socket ctx.protocol
ctx.secure 
ctx.ip ctx.proxy 为true时 支持 X-Forward-Proto 
ctx.ips
ctx.subdomains
ctx.is 
内容协商通过 accepts 和negotiator提供的有用的内容协商实体
ctx.accepts()  ctx.acceptsEncodings() ctx.acceptsCharsets() ctx.acceptsLanguages() ctx.get()

Reponse 对象
ctx.body
ctx.body=
ctx.status
ctx.status=
ctx.message
ctx.message=
ctx.length=
ctx.length
ctx.type=
ctx.type
ctx.headerSent
ctx.redirect()
ctx.attachment()
ctx.set()
ctx.append()
ctx.remove()
ctx.lastModified=
ctx.etag=
ctx.response.etag = crypto.createHash('md5').update(ctx.body).digest('hex');



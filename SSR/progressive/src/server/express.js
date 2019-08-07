import path from 'path'
import express from 'express'
import ip from 'ip'
import React from 'react'
import { matchRoutes } from 'react-router-config'
import { render } from './utils'
import { getServerStore } from '../store'
// eolution-2
import routes from '../Routes'
/**
 * 1、http、 express、koa、egg 之间的区别是什么？
 */

/* evolution-1 纯html
const app = express()

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>express</title>
      </head>
      <body>
        <h1>express example</h1>
      </body>
    </html>
  `)
})
// */

// /* evolution-2 返回 string 化的 React 组件
import { renderToString, renderToNodeStream } from 'react-dom/server'
import proxy from 'express-http-proxy'
import Home from '../containers/Home'

// http://expressjs.com/en/api.html
const app = express()
// 静态文件服务，默认指认根目录下的 public 文件夹
app.use(express.static('public'))
app.use(express.json())
// 无需写成以下形式
// app.use(express.static(path.resolve(__dirname, '../../public')))
/* 将接口请求代理到其他服务 */
// app.use(
//   "/api",
//   proxy("http://localhost:3000", {
//     proxyReqPathResolver: function(req) {
//       return `/api${req.url}`
//     }
//   })
// )

app.get('*' /* '/' */, (req, res) => {
  // api 接口服务
  if (req.path === '/api/list') {
    const { limit } = req.query
    const data = [...Array(+limit)].map((i, ix) => ({id: ix.toString(), title: `title${ix}`}))
    return res.json({
      err_no: 0,
      err_msg: '',
      data
    })
  }
  // 将 res.send 的内容封装为和请求上下文相关的 render 函数
  // 1. 如何对 <head> 里内容做动态替换？

  /* evolution-1 直接返回 string 化的组件
  const content = renderToString(<Home />)
  const html = `
    <html>
      <head>
        <title>express1</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `
  res.send(html)
  // */

  /* evolution-2 将返回 string 封装为函数
  res.send(render())
  // */

  /* evolution-3 向 render 注入请求上下文、状态等信息
  const store = {}
  const context = {}
  res.send(render({ store, routes, req, context }))
  // */

  /* evolution-4 流式吞吐
  res.write(`
    <!DOCTYPE html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <title>Universal React</title>
      <link rel="stylesheet" href="/css/main.css">
      <script src="/client.bundle.js" defer></script>
    </head>
  `)
  res.write("<div id='root'>")
  const stream = renderToNodeStream(<Home />)
  stream.pipe(
    res,
    { end: false }
  )
  stream.on("end", () => {
    res.write("</div></body></html>")
    res.end()
  })
  // */

  /// * evolution-5 服务端路由
  const store = getServerStore()
  // 根据路由的路径，来往store里面加数据
  // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.getInitialProps) {
      const promise = new Promise((resolve, reject) => {
        // 保证不管组件加载成功还是失败都不影响其它组件
        item.route
          .getInitialProps(store)
          .then(resolve)
          .catch(resolve)
      })
      promises.push(promise)
    }
  })
  Promise.all(promises).then(() => {
    const context = { css: [] }
    const html = render({ store, routes, req, context })
    // StaticRouter
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NotFound) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  }).catch(() => {

  })
  // */
})
//* /

const server = app.listen(process.env.PORT || 3000, () => {
  // const host = server.address().address
  const port = server.address().port
  console.log('> Ready on http://%s:%s', ip.address(), port)
})

// export default server

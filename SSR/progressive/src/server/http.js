import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
  res.end(`
    <html>
      <head>
        <title>express</title>
      </head>
      <body>
        <h1>http.createServer example</h1>
      </body>
    </html>
  `)
})
server.listen(3000, () => {
  console.log('listen:3000')
})

export default server

/**
 * 路由
 * 鉴权
 * 静态文件服务
 */

const express = require("express")
// const React = require("react").default
const { renderToString } = require("react-dom/server")
const Home = require("./Home").default

console.log(5, renderToString)
const app = express()
const content = renderToString(<Home />)

app.get("/", (req, res, next) => {
  res.send(`
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log(`> Ready on localhost:3000`)
})

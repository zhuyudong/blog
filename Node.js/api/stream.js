// https://github.com/jabez128/stream-handbook
const stream = require("stream")
const fs = require("fs")
const path = require("path")
const http = require("http")

// 1. 一次性注入，易造成内存压力
/*
const server = http.createServer((req, res) => {
  fs.readFile(path.resolve(__dirname, "./123.txt"), (err, data) => {
    // <Buffer ...
    // console.log(data)
    res.end(data)
  })
})
server.listen(8000)
//*/

// 2. 使用流
/*
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(path.resolve(__dirname, "./123.txt"))
  stream.pipe(res)
})
server.listen(8000)
//*/

// 压测：ab -n 100 -c 100

// readable 流
const { Readable } = stream
const rs = new Readable()
/*
rs.push("beep ")
rs.push("boop\n")
// 表示输出结束
rs.push(null)
rs.pipe(process.stdout) // -> beep boop
//*/

let c = 97
rs._read = function() {
  rs.push(String.fromCharCode(c++))
  if (c > "z".charCodeAt(0)) rs.push(null)
}
rs.pipe(process.stdout) // -> abcdefghijklmnopqrstuvwxyz%

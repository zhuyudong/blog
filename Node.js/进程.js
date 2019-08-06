const cluster = require("cluster")
const http = require("http")
const numCPUs = require("os").cpus().length

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on("exit", function(worker, code, signal) {
    console.log("work " + worker.process.pid + died)
  })
} else {
  http
    .createServer(function(req, res) {
      req.writeHead(200)
      req.end("hello world\n")
    })
    .listen(8000)
}

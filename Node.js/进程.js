const cluster = require("cluster")
const http = require("http")
const child_process = require("child_process")
// cpu数 * 核数
const numCPUs = require("os").cpus().length

// 为什么会打印多次？
// console.log("cpu numbers: ", numCPUs)
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    // 复制一个进程
    cluster.fork()
  }
  cluster.on("exit", function(worker, code, signal) {
    console.log("work " + worker.process.pid + "died")
  })
} else {
  /* 1. 通过回调响应请求
  const server = http.createServer(function(req, res) {
    console.log("callback")
    console.log(process.pid)
    res.writeHead(200)
    res.end("hello world\n")
  })
  //*/

  // 2. 通过事件响应请求，可以和上面共存，先后执行，但如上面已返回（res.end）,则这里res.end不执行
  /*
  const server = http.createServer()
  server.on("request", (req, res) => {
    console.log("request url: ", req.url)
    if (req.url === "/compute") {
      console.time("compute")
      const sum = longComputation()
      console.timeEnd("compute")
      return res.end(`Sum is ${sum}`)
    } else {
      res.end("ok")
    }
  })
  //*/

  ///* 3. 通过 child_process fork 子进程来处理耗时任务
  const server = http.createServer((req, res) => {
    if (req.url === "/compute") {
      const compute = child_process.fork("./fork-compute.js")
      compute.send("开启一个新子进程")
      compute.on("message", sum => {
        res.end(`Sum is ${sum}`)
        compute.kill()
      })
      compute.on("close", (code, signal) => {
        console.log(
          `收到close事件，子进程收到信号 ${signal} 而终止，退出码 ${code}`
        )
        compute.kill()
      })
    } else {
      res.end("ok")
    }
  })

  //*/
  server.listen(8000, () => {
    // 启动几个进程就打印几次
    console.log(process.pid)
  })
}

const longComputation = () => {
  let sum = 0
  for (let i = 0; i < 1e10; i++) {
    sum += i
  }
  return sum
}

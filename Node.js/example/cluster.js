const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// cluster 模块是二者之间的桥梁
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i ++) {
    cluster.fork();
  }
  cluster.on('exit', (work) => {
    console.log(`${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}
console.log('hello');
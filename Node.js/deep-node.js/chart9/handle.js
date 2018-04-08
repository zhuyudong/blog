// 主进程将句柄直接发送给子进程
var child1 = require('child_process').fork('child1.js');
var child2 = require('child_process').fork('child2.js');
var server = require('net').createServer();
server.on('connection', function(socket) {
  socket.end('handled by parent\n');
});
server.listen(1337, function() {
  child1.send('server', server);
  child2.send('server', server);
});
// child1.js
process.on('message', function(m, server) {
  if (m === 'server') {
    server.on('connection', function(socket) {
      socket.end('handled by child1\n');
    });
  }
});
// child2.js
process.on('message', function(m, server) {
  if (m === 'server') {
    server.on('connection', function(socket) {
      socket.end('handled by child2\n');
    });
  }
});
// curl "http://127.0.0.1:1337/"
// 上面的请求会被父子进程随机处理


// 主进程将句柄直接发送给子进程（HTTP）
var child1 = require('child_process').fork('child1.js');
var child2 = require('child_process').fork('child2.js');
var server = require('net').createServer();
server.on('connection', function(socket) {
  socket.end('handled by parent\n');
});
server.listen(1337, function() {
  child1.send('server', server);
  child2.send('server', server);
  // 交给子进程处理后关掉父进程
  server.close();
});
// child1.js
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('handled by child, pid is ' + process.pid + '\n');
})
process.on('message', function(m, tcp) {
  if (m === 'server') {
    tcp.on('connection', function(socket) {
      server.emit('connection', socket);
    });
  }
});
// child2.js
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('handled by child, pid is ' + process.pid + '\n');
})
process.on('message', function(m, tcp) {
  if (m === 'server') {
    tcp.on('connection', function(socket) {
      server.emit('connection', socket);
    });
  }
});
// curl "http://127.0.0.1:1337/"
// 上面的请求会被固定一个子进程处理（抢占式）
const http = require('http');
const { inspect } = require('util');

const server = http.createServer((req, res) => {
  const resObj = inspect(res, {depth: null, showHidden: true});
  res.writeHead(200, { 'Content-Type': 'application/json'});
  res.end(resObj);
});
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000');
});
//*/

// NODE_DEBUG=HTTP,STREAM,MODULE,NET node http-server.js
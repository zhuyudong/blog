var fs = require('fs');
var process = require('process');

fs.open('/Users/zhuyudong/Desktop/CODE/Blog/Node.js/example/log.txt', function(err, fd) {
  console.log(fd);
  while(true) {
    fs.write(fd, process.pid + '\n', function() {});
  }
});
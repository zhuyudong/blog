var cp = require('child_process');
var cpus = require('os').cpus();
for (var i = 0; i < cpus.length; i++) {
  // fork 启动的是独立的进程，有独立全新的V8实例，需要至少30ms的启动时间和至少10M的内存
  cp.fork('./worker');

  // spawn模式
  cp.spawn('node' ['worker.js']);
  // exec 方式
  cp.exec('node work.js', function(err, stdout, stderr) {

  });
  // execFile方式
  cp.execFile('work.js', function(err, stdout, stderr) {

  });
}
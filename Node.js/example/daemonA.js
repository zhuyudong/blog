/**
 * 创建守护进程
 * 1. 创建进程A
 * 2. 在进程A中创建进程B（fork或其它方法）
 * 3. 对进程B执行setsid方法
 *   3.1 该进程变成一个新会话的会话领导
 *   3.2 该进程变成一个新进程组的组长
 *   3.3 该进程没有控制终端
 * 4. 进程A退出，进程B由init进程接管，此时B为守护进程
 */
var spawn = require('child_process').spawn;
var process = require('process');

var p = spawn('node', ['daemonB.js'], {
  detached: true // 调用setsid方法
});
console.log(process.pid, p.pid);
process.exit(0);
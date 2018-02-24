const util = require('util');
/*
  child_process.exec(command[, options][, callback])
  (err, stdout, stderr) => {}, err.code是子进程的退出码
  const defaults = {
    encoding: 'utf8', 如果是buffer或无法识别的字符编码则传入Buffer对象到回调
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null
  };
 */
/*-------part1-------*/
const exec = util.promisify(require('child_process').exec);

async function IsExample() {
  const { err, stdout, stderr } = await exec('ls');
  console.log('stdout: ', stdout);
  console.log('stderr: ', stderr);
}
IsExample();

/*-------part2-------*/
const { exec } = require('child_process');
exec('cat *.js bad_file | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.log(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})

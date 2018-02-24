const fs = require('fs-extra');

const file = fs.createWriteStream(__dirname + '/tmp.txt');
// fs.outputFileSync(file, `first line \r\n`);
// fs.outputFileSync(file, `second line \r\n`);
fs.writeSync(file, 'first line');
fs.writeSync(file, 'second line');

const data = fs.readFileSync(file, 'utf8');
console.log(data); // => hello!
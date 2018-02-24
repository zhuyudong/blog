exports.done = false;
var mod8 = require('./module8');
console.log('在 module8.js 中， mod8.done = %j', mod8.done);
exports.done = true;
console.log('module7.js 执行完毕');
exports.done = false;
var mod7 = require('./module7');
console.log('在 module7.js 中， mod7.done = %j', mod7.done);
exports.done = true;
console.log('module8.js 执行完毕');
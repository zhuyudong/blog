const util = require('util');

// async function fn(params) {
//   return await Promise.resolve('hello');
// }
// const callbackFunction = util.callbackify(fn);
// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret); // hello
// });

async function fn(params) {
  return await Promise.reject(Error('reject'));
}
const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log('ret: ', ret);
});
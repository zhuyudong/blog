const util = require('util');

const obj = {w: 1};
const arr = [1, 2, 3];
console.log(typeof util.inspect(obj, {breakLength: Infinity, depth: null}));
console.log(typeof util.inspect(arr, {breakLength: Infinity, depth: null}));
console.log(typeof util.inspect(100, {breakLength: Infinity, depth: null}));
console.log(typeof util.inspect('str', {breakLength: Infinity, depth: null}));
console.log(typeof util.inspect(true, {breakLength: Infinity, depth: null}));
console.log(typeof util.inspect(null, {breakLength: Infinity, depth: null}));
console.log(typeof util.inspect(undefined, {breakLength: Infinity, depth: null}));
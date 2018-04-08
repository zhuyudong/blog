/**
 * Buffer大小在创建时确定，且无法调整，在V8堆外分配内存，
 * Node.js 支持的字符编码：ascii utf8 utf16le usc2 base64 latin1 binary hex
 */
// console.log(Object.getOwnPropertyNames(Buffer));
/**
 * [ 'length',
  'name',
  'prototype',
  'poolSize',
  'from',
  'alloc',
  'allocUnsafe',
  'allocUnsafeSlow',
  'isBuffer',
  'compare',
  'isEncoding',
  'concat',
  'byteLength' ]
 */
// 全局变量无需引用
const buffer = require('buffer');
// console.log(Object.getOwnPropertyNames(buffer));
/**
 * [ 'Buffer',
  'SlowBuffer',
  'INSPECT_MAX_BYTES',
  'kMaxLength',
  'constants',
  'kStringMaxLength',
  'transcode' ]
 */
console.log(buffer.constants.MAX_LENGTH); // 2147483647 === Math.pow(2, 31) - 1
console.log(buffer.constants.MAX_STRING_LENGTH); // 268435440 === Math.pow(2, 28) - 16
console.log(Buffer.poolSize); // 8192

 // Buffer.alloc(size<integer>[, fill<string|Buffer|integer>[, encoding]);
 // 长度10，0填充
 // Buffer.alloc() 永远不会用 Buffer.poolSize 这个内部 Buffer 池
 const buf1 = Buffer.alloc(10);
 console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
 // 长度10，用0x1 填充
 const buf2 = Buffer.alloc(10, 1);
 console.log(buf2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

 // Buffer.allocUnsafe(size) 如果分配的内存小于4kb时，默认会从一个单一的预分配的Buffer切割出来，优化GC
 // 长度10，未初始化，比 Buffer.allocUnsafe 快，其中可能包含旧数据，需要 fill() 或 write() 重写
 // 不带参数的话会分分配大小 Buffer.poolSize 的内部实例作为快速分配池
 const buf3 = Buffer.allocUnsafe(10);
 console.log(buf3); // <Buffer 15 08 00 04 01 00 00 00 d8 08>
 buf3.fill(0);
 console.log(buf3); // <Buffer 00 00 00 00 00 00 00 00 00 00>
 // 将指定数据转为Buffer
 const buf4 = Buffer.from([1, 2, 3]);
 console.log(buf4); // <Buffer 01 02 03>
 // 包含特殊UTF-8字符（字符）
 const buf5 = Buffer.from('tést');
 console.log(buf5); // <Buffer 74 c3 a9 73 74>
 // 包含特殊字节
 const buf6 = Buffer.from('tést', 'latin1');
 console.log(buf6); // <Buffer 74 e9 73 74>
 // 同时指定fill和encoding
 const buf7 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
 console.log(buf7); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
 // 测试size过大
// const buf8 = Buffer.allocUnsafe(2147483648); // RangeError: "size" argument must not be larger than 2147483647

// Buffer.allocUnsafeSlow() 创建一个非池的Buffer
/*const store = [];
socket.on('readable', () => {
  const data = socket.read();
  const sb = Buffer.allocUnsafeSlow(10);
  data.copy(sb, 0, 0, 10);
  store.push(sb);
});
//*/

const newBuf = buffer.transcode(Buffer.from('€'), 'utf8', 'ascii');
// console.log(newBuf.toString('ascii'));

// 计算字符的实际字节长度
const str = '\u00bd + \u00bc = \u00be';
console.log(`${str}: ${str.length} 个字符, ` + `${Buffer.byteLength(str, 'utf8')} 个字节`); // ½ + ¼ = ¾: 9 个字符, 12 个字节

// 可被迭代
const buf9 = Buffer.from([1, 2, 3]);
for (const b of buf9) {
  console.log(b); // 1 2 3
}

// 实例数组的排序
const buf10 = Buffer.from('1234');
const buf11 = Buffer.from('0123');
const arr = [buf1, buf2];
console.log(Buffer.compare(buf10, buf11)); // 1
console.log(arr.sort(Buffer.compare)); // [ <Buffer 00 00 00 00 00 00 00 00 00 00>, <Buffer 01 01 01 01 01 01 01 01 01 01> ]

// Buffer.concat(list[, totalLength]) 合并
const buf12 = Buffer.alloc(10);
const buf13 = Buffer.alloc(14);
const buf14 = Buffer.alloc(18);
const totalLength = buf1.length + buf13.length + buf14.length;
const buf15 = Buffer.concat([buf12, buf13, buf14], totalLength);
console.log(buf15, buf15.length); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00> 42
// 被截断
const buf16 = Buffer.concat([buf12, buf13, buf14], 30); 
console.log(buf16.length); // 30 

// 通过数组创建新的buffer
const buf17 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf17); // <Buffer 62 75 66 66 65 72>
const buf18 = Buffer.from([1, 2, 3, 4, 5, 6]);
console.log(buf18); // <Buffer 01 02 03 04 05 06>
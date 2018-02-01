/**
 * string_decoder 模块用于把 Buffer 对象解码成字符串，但会保留编码过的多字节 UTF-8 与 UTF-16 字符
 * StringDecoder([encoding <string>]) encoding 默认 'utf8'
 */
const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

// 残缺的
const cen = Buffer.from([0xC2]);
console.log(decoder.write(cen)); // �¢

const cent = Buffer.from([0xC2, 0xA2]);
// decoder.write([buffer <Buffer>]) 返回解码后的字符串，并确保返回的字符串不包含 Buffer 末尾残缺的多字节字符，残缺的多字节字符会保存在一个内部的 buffer 中，
// 用于下次调用 decoder.write() 或 decoder.end()
console.log(decoder.write(cent)); // ¢

const euro = Buffer.from([0xE2, 0x82, 0xAc]);
console.log(decoder.write(euro)); // €

console.log(Object.getOwnPropertyNames(StringDecoder)); // [ 'length', 'name', 'prototype' ]
console.log(Object.getOwnPropertyNames(StringDecoder.prototype)); [ 'constructor', 'write', 'end', 'text', 'fillLast' ]

/* 欧元符号（€）的三个 UTF-8 编码的字节被分三次操作写入 */
decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
// decoder.end([buffer <Buffer>]) 以字符串的形式返回内部 buffer 中剩余的字节，残缺的 UTF-8 与 UTF-16 字符的字节会被替换成符合字符编码的字符
console.log(decoder.end(Buffer.from([0xAC]))); // €
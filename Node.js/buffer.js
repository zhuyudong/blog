/*
const buf1 = Buffer.allocUnsafe(26)

for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值。
  buf1[i] = i + 97
}

console.log(buf1.toString("ascii"))
// 打印: abcdefghijklmnopqrstuvwxyz
console.log(
  buf1
    .toString("ascii", 0, 4)
    .charCodeAt()
    .toString(2)
)
// 打印: abcde

const buf2 = Buffer.from("tést")

console.log(buf2.toString("hex"))
// 打印: 74c3a97374
console.log(buf2.toString("utf8", 0, 3))
// 打印: té
console.log(buf2.toString(undefined, 0, 3))
//*/
/*
const buffer = Buffer.from("buffer1234567890")
var frameidBlob = buffer.slice(0, 4)
var frameid = parseInt(frameidBlob.toString(), 2)
console.log(frameid)
//*/
/*
const buf = Buffer.from("buffer01234567890")

const copiedBuf = Uint8Array.prototype.slice.call(buf)
console.log(parseInt(copiedBuf.toString(), 2))
*/

function strToBinary(str) {
  const result = []
  const list = str.split("")
  for (let i = 0; i < list.length; i++) {
    if (i != 0) {
      result.push(" ")
    }
    const item = list[i]
    const binaryStr = item.charCodeAt().toString(2)
    result.push(binaryStr)
  }
  return result.join("")
}
// console.log(strToBinary("216775"))
// console.log(strToBinary("abcde"))

const buf = Buffer.from("runoob", "utf8")

// 输出 72756e6f6f62
console.log(buf.toString())

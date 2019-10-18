// 使用 MessageChannel 实现深拷贝
function structualClone(obj) {
  return new Promise(resolve => {
    const { port1, port2 } = new MessageChannel()
    port2.onmessage = env => resolve(env.data)
    port1.postMessage(obj)
  })
}
const obj = {
  a: 1,
  b: {
    c: 2
  }
}
obj.b.d = obj.b
const test = async () => {
  const clone = await structualClone(obj)
  console.log(clone)
}

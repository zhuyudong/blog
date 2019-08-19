const cury = fn => {
  // fn.length 是函数形参个数
  if (fn.length === 1) return fn
  // const generator = (args, rest) => (!rest ? fn(...args) : arg => generator([...args, arg], rest - 1))
  let count = 1
  const generator = (args, rest) => {
    if (!rest) {
      console.log(`${count}: args: ${JSON.stringify(args)}, rest: ${rest}`)
      count++
      return fn(...args)
    } else {
      return arg => {
        console.log(
          `${count} iterator: args: ${JSON.stringify(
            args
          )}, arg: ${arg}, rest: ${rest}`
        )
        count++
        return generator([...args, arg], rest - 1)
      }
    }
  }
  return generator([], fn.length)
}

// const curry_short = (fn, arr = []) => (...args) =>
//   (arg => (arg.length === fn.length ? fn(...arg) : curry_short(fn, arg)))([
//     ...arr,
//     ...args
//   ])
const curry_short = (fn, arr = []) => (...args) => {
  console.log(args, [...arr, ...args])
  return (arg => {
    if (arg.length === fn.length) {
      return fn(...arg)
    }
    return curry_short(fn, arg)
  })([...arr, ...args])
}
const sum = (a, b, c) => a + b + c
const curriedSum = cury(sum)
// console.log("result: ", curriedSum(1)(2)(3))
console.log("result: ", curry_short(sum)(1)(2)(3))

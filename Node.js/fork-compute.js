const longComputation = () => {
  let sum = 0
  for (let i = 0; i < 1e10; i++) {
    sum += i
  }
  return sum
}

process.on("message", msg => {
  console.log(msg, "process.pid: ", process.pid)
  const sum = longComputation()
  process.send(sum)
})

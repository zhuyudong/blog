async function errorCapture(asyncFunc) {
  try {
    let res = await asyncFunc()
    return [null, res]
  } catch (err) {
    return [err, null]
  }
}

let [err, res] = await errorCapture(asyncFunc)

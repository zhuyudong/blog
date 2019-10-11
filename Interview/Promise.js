function Promise(executor) {
  // const self = this
  this.status = "pending"
  this.value = null
  this.reason = null
  this.onFullfilledFunc = Function.prototype
  this.onRejectedFunc = Function.prototype

  // function resolve(value) {
  //   self.value = value
  // }
  const resolve = value => {
    if (this.status === "pending") {
      this.value = value
      this.status = "fulfilled"
      this.onFullfilledFunc(this.value)
    }
  }

  // function reject(reason) {
  //   self.reason = reason
  // }

  const reject = reason => {
    if (this.status === "pending") {
      this.reason = reason
      this.status = "rejected"
      this.onRejectedFunc(this.reason)
    }
  }

  executor(resolve, reject)
}

const resolvePromise = (promise2, result, resolve, reject) => {}

Promise.prototype.then = function(
  onfulfilled, // = Function.prototype,
  onrejected // = Function.prototype
) {
  onfulfilled = typeof onfulfilled === "function" ? onfulfilled : data => data
  onrejected =
    typeof onrejected === "function"
      ? onrejected
      : error => {
          throw error
        }

  if (this.status === "fulfilled") {
    onfulfilled(this.value)
  }
  if (this.status === "rejected") {
    onrejected(this.reason)
  }
  if (this.status === "pending") {
    this.onFullfilledFunc = onfulfilled
    this.onRejectedFunc = onrejected
  }
}

Promise.prototype.catch = function(catchFunc) {
  return this.then(null, catchFunc)
}

Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

Promise.resolve = function(reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

Promise.race = function(promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new Error("The arguments should be an array")
  }
  return new Promise((resolve, reject) => {
    try {
      const length = promiseArray.length
      for (let i = 0; i < length; i++) {
        promiseArray[i].then(resolve, reject)
      }
    } catch (e) {
      reject(e)
    }
  })
}

Promise.all = function(promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new Error("The arguments should be an array")
  }

  return new Promise((resolve, reject) => {
    try {
      const resultArray = []
      const length = promiseArray.length
      for (let i = 0; i < length; i++) {
        promiseArray[i].then(data => {
          resultArray.push(data)

          if ((resultArray.length = length)) {
            return resultArray
          }
        }, reject)
      }
    } catch (e) {
      reject(e)
    }
  })
}

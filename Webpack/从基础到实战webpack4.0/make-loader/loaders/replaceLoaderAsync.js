const loaderUtils = require("loader-utils")

module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  console.log("replaceAsyncLoader", options)
  const callback = this.async()

  setTimeout(() => {
    const result = source.replace("dell", options.name)
    callback(null, result)
  }, 1000)
}

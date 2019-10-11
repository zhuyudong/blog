const loaderUtils = require("loader-utils")

module.exports = function(source) {
  console.log("replace-loader")
  return source.replace("lee", "world")
}

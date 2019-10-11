// https://github.com/axios/axios/blob/88dbb82d77/lib/defaults.js
function isNodeEnv() {
  return (
    typeof process !== "undefined" &&
    Object.prototype.toString.call(process) === "[object process]"
  )
}

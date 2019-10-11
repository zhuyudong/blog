// https://github.com/tj/node-only/blob/master/index.js
function only(obj, keys) {
  obj = obj || {}
  if (typeof keys === "string") keys = keys.split(/ +/)
  return keys.reduce((ret, key) => {
    if (obj[key] == null) return ret
    ret[key] = obj[key]
    return ret
  }, {})
}

let container = new Array(256).fill(-1)
let index = 0
function Init () {
  container = new Array(256).fill(-1)
  index = 0
}
function Insert(ch) {
  const code = ch.charCodeAt(0)
  if (container[code] === -1) {
    container[code] = index
  } else if (container[code] >= 0) {
    container[code] = -2
  }
  index++
}
function FirstAppearingOnce() {
  let minIndex = 256
  let strIndex = 0
  for (let i = 0; i < 256; i++) {
    if (container[i] >= 0 && container[i] < minIndex) {
      minIndex = container[i]
      strIndex = i
    }
  }
  return minIndex === 256 ? '#' : String.fromCharCode(strIndex)
}
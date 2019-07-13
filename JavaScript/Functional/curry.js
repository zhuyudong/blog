const add = function(a, b) {
  return a + b
}

const c_add = curry2(add)

const input = _.range(8000)

addAll(input, add)
addAll(input, c_add)

function addAll(arr, fn) {
  let result = 0
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      result += fn(arr[i], arr[j])
    }
  }
}

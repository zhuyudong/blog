const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]]
  })
}

const compact = arr => arr.filter(Boolean)

const concat = (arr, other) => arr.concat(other)

const difference = (arr, other) =>
  [arr, other].reduce((a, b) => a.filter(v => !b.includes(v)))

const drop = (arr, start = 1) => arr.slice(start)

const fill = (arr, ...args) => {
  if (args.length === 1) {
    return arr.fill(char)
  }
  return arr.fill(...args)
}

const find = (obj, func) => obj.find(func)

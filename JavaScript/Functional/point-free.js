import { throwError } from "rxjs"

const runProgram = R.pipe(
  R.map(R.toLower),
  R.uniq,
  R.sortBy(R.identity)
)

runProgram([
  "Functional",
  "Programming",
  "Curry",
  "Memoization",
  "Partial",
  "Curry",
  "Programming"
])

const trim = str => str.replace(/^\s*|\s*$/, "")
const normalize = str => str.replace(/\-/g, "")

const Tupe = function(/* types */) {
  const typeInfo = Array.prototype.slice(arguments, 0)
  const _T = function(/* values */) {
    const values = Array.prototype.slice.call(arguments, 0)
    if (values.some(val => val === null || val === undefined)) {
      throw new ReferenceError("Tuples may not have any null values")
    }
    if (values.length !== typeInfo.length) {
      throw new TypeError("Tuple arity does not match its prototype")
    }
  }
}

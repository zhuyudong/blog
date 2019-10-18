import { from } from "rxjs"
import { last } from "rxjs/operators"

const source = from([1, 2, 3, 4, 5])

source.pipe(last()).subscribe(console.log) // 5

source.pipe(last(num => num % 2 === 0)).subscribe(console.log) // 4

source.pipe(last(v => v > 5, "Nothing")).subscribe(console.log) // 'Nothing'

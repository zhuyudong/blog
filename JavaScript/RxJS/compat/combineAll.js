import { take, map, combineAll } from "rxjs/operators"
import { interval } from "rxjs"

interval(1000)
  .pipe(take(2))
  .pipe(
    map(val =>
      interval(1000).pipe(
        map(i => `Result (${val}): ${i}`),
        take(5)
      )
    )
  )
  .pipe(combineAll())
  .subscribe(console.log)

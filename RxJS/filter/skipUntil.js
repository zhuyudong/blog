import { interval, timer } from "rxjs"
import { skipUntil } from "rxjs/operators"

interval(1000)
  .pipe(skipUntil(timer(6000)))
  .subscribe(console.log) // 5...6...7...

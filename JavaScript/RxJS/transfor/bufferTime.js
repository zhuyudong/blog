import { interval } from "rxjs"
import { bufferTime } from "rxjs/operators"

interval(500)
  .pipe(bufferTime(2000))
  .subscribe(console.log)

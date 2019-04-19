import { interval, fromEvent } from "rxjs"
import { buffer } from "rxjs/operators"

interval(1000)
  .pipe(buffer(fromEvent(document, "click")))
  .subscribe(console.log)

import { of, throwError, timer, from } from "rxjs"
import { catchError, mergeMap } from "rxjs/operators"

/*
throwError("This is an error")
  .pipe(catchError(val => of(`I caught: ${val}`)))
  .subscribe(console.log)
*/

// 捕获拒绝的promise
const myBadPromise = () => new Promise((resolve, reject) => reject("Rejected!"))
timer(1000)
  .pipe(
    mergeMap(_ =>
      from(myBadPromise()).pipe(
        catchError(error => of(`Bad Promise: ${error}`))
      )
    )
  )
  .subscribe(console.log) // Bad Promise: Rejected!

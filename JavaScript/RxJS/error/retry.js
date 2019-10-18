import { interval, of, throwError } from "rxjs"
import { mergeMap, retry } from "rxjs/operators"

// 重试2次后退出
interval(1000)
  .pipe(
    mergeMap(val => {
      if (val > 5) {
        return throwError("Error")
      }
      return of(val)
    }),
    retry(2)
  )
  .subscribe({
    next: console.log,
    error: val => console.log(`${val}: Retried 2 times then quit `)
  })

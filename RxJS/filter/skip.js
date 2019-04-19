import { interval, from } from "rxjs"
import { skip, filter } from "rxjs/operators"

/*
interval(1000)
  .pipe(skip(5))
  .subscribe(console.log) // 5...6...7
//*/

// 类比filter
const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
numArrayObs.pipe(skip(2)).subscribe(console.log) // 3...4...5...
numArrayObs.pipe(filter((val, index) => index > 1)).subscribe(console.log) // 3...4...5...

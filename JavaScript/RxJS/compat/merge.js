/*
import { interval, merge } from "rxjs"
import { mapTo } from "rxjs/operators"


merge(
  interval(2500).pipe(mapTo("FIRST")),
  interval(2000).pipe(mapTo("SECOND")),
  interval(1500).pipe(mapTo("THIRD")),
  interval(1000).pipe(mapTo("FOURTH"))
).subscribe(console.log) // "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
*/

// 实例merge方法
import { interval } from "rxjs"
import { merge } from "rxjs/operators"
interval(2500)
  .pipe(merge(interval(1000)))
  .subscribe(console.log)

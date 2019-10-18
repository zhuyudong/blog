import { of, interval, fromEvent } from "rxjs"
import { take, tap } from "rxjs/operators"

// 取前三个值
of(5, 4, 3, 2, 1)
  .pipe(take(3))
  .subscribe(console.log) // 5  4  3

// 取前5个值
interval(1000)
  .pipe(take(5))
  .subscribe(console.log) // 0 1 2 3 4

// 取得首次点击的坐标
/**
 * <div id="locationDisplay">Where would you click first?</div>

fromEvent(document, "click").pipe(
  take(1),
  tap(v => {
    document.getElementById(
      "locationDisplay"
    ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`
  })
).subscribe(console.log)
 */

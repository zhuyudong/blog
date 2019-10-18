import { timer, interval, throwError } from "rxjs"
import { map, tap, retryWhen, delayWhen, retry } from "rxjs/operators"

// 5秒后触发重试
interval(1000)
  .pipe(
    map(val => {
      if (val > 5) {
        throw val
      }
      return val
    }),
    retryWhen(errors => {
      return errors.pipe(
        // 输入错误信息
        tap(val => console.log(`Value ${val} was too high!`)),
        // 5秒后重启
        delayWhen(val => timer(val * 1000))
      )
    })
  )
  .subscribe(console.log)

// 时间间隔增加的自定义重试
// Todo

// 需要安装rxjs-compat
import { mapTo, delay, map } from "rxjs/operators"
import { interval } from "rxjs/observable/interval"
import { race } from "rxjs/observable/race"
import { of } from "rxjs"

// 接收第一个发出值的 observable
/*
race(
  interval(1500),
  interval(1000).pipe(mapTo("1s won!")),
  interval(2000),
  interval(2500)
).subscribe(console.log) // "1s won!"..."1s won!"...etc
//*/

const first = of("first").pipe(
  delay(100),
  map(_ => {
    throw "error"
  })
)
const second = of("second").pipe(delay(200))
const third = of("third").pipe(delay(300))
race(first, second, third).subscribe(console.log)

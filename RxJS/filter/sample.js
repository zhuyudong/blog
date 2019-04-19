import { interval, zip, from, merge, fromEvent } from "rxjs"
import { sample, mapTo } from "rxjs/operators"

/*
const source1 = interval(1000)
// 每2s取样一次
const example1 = source1.pipe(sample(interval(2000)))
const subscribe1 = example1.subscribe(console.log) // 0 2 4...
//*/

zip(from(["Joe", "Franke", "Bob"]), interval(2000))
  .pipe(sample(interval(2500)))
  .subscribe(console.log) // ['Joe',0]  ['Franke',1]

/*
const listener = merge(
  fromEvent(document, "mousedown").pipe(mapTo(false)),
  fromEvent(document, "mousemove").pipe(mapTo(true))
)
  .pipe(sample(fromEvent(document, "mouseup")))
  .subscribe(isDragging => {
    console.log("Were you dragging?", isDragging)
  })
//*/

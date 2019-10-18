import { of, interval, Subject } from "rxjs"
import { scan, map, distinctUntilChanged } from "rxjs/operators"

/*
of(1, 2, 3)
  .pipe(scan((acc, curr) => acc + curr, 0))
  .subscribe(console.log) // 1 3 6
//*/

// 累加对象
const subject = new Subject()
subject
  .pipe(scan((acc, curr) => Object.assign({}, acc, curr)))
  .subscribe(console.log)
subject.next({ name: "Joe" })
subject.next({ age: 30 })
subject.next({ favoriteLanguage: "Javascript" })

// 累加数组中值，并随机发出
interval(1000)
  .pipe(
    scan((acc, curr) => [...acc, curr], []),
    map(r => r[Math.floor(Math.random() * r.length)]),
    distinctUntilChanged()
  )
  .subscribe(console.log) // 0 1 0 2 4 2

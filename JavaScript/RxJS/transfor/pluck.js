import { from } from "rxjs"
import { pluck } from "rxjs/operators"

from([{ name: "Joe", age: 30 }, { name: "Sarah", age: 25 }])
  .pipe(pluck("name"))
  .subscribe(console.log) // "Joe" "Sarah"

from([
  { name: "Joe", age: 30, job: { title: "Developer", language: "JavaScript" } },
  // 当找不到 job 属性的时候会返回 undefined
  { name: "Sarah", age: 35 }
])
  .pipe(pluck("job", "title"))
  .subscribe(console.log) // "Developer" undefined

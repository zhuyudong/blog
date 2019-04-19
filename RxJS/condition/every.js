import { of } from "rxjs"
import { every } from "rxjs/operators"

of(1, 2, 3, 4, 5)
  .pipe(every(val => val % 2 === 0))
  .subscribe(console.log) // false

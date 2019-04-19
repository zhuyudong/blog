import { from } from "rxjs"
import { single } from "rxjs/operators"

from([1, 2, 3, 4, 5])
  .pipe(single(val => val === 4))
  .subscribe(console.log) // 4

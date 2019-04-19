import { of } from "rxjs"
import { reduce } from "rxjs/operators"

of(1, 2, 3, 4, 5)
  .pipe(reduce((acc, val) => acc + val))
  .subscribe(console.log) // 15

import { of } from "rxjs"
import { defaultIfEmpty } from "rxjs/operators"

of()
  .pipe(defaultIfEmpty("Observable.of() Empty"))
  .subscribe(console.log)

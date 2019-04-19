// bad
import 'rxjs/add/operator/take'
/**
  import { Observable } from '../../Observable'
  import { take } from '../../operator/take'
  Observable.prototype.take = take
  declare module '../../Observable' {
    interface Observable<T> {
      take: typeof take
    }
  }
*/

// bad 不会污染原型链
import { take } from 'rxjs/operator/take'
import { map } from 'rxjs/operator/map'
import { of } from 'rxjs/operator/map'
map.call(
  take.call(
    of(1,2,3),
    2
  ),
  val => val + 2
)

// good
import { take, map } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
of(1,2,3)
  .pipe(
    take(2),
    map(val => val + 2)
  )
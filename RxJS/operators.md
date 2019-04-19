## 操作符

## 组合
- `combineAll`
- `combineLatest`
- `concat`
- `concatAll`
- `forkJoin`
- `merge(input: Observable): Observable` 将多个observables转换成单个observable
- `mergeAll`
- `pairwise`
- `race`
- `startWith`
- `withLatestFrom`
- `zip`
## 条件
- `defaultIfEmpty`
- `every
## 创建
- `create`
- `empty`
- `from`
- `fromEvent`
- `fromPromise`
- `interval(period: number, scheduler: Scheduler): Observable` 基于给定时间间隔发出数字序列
- `of`
- `range`
- `throw`
- `timer`
## 错误处理
- `catchError`
- `retry`
- `retryWhen`
## 多播
- `publish`
- `multicast`
- `share`
- `shareReplay`
## 过滤
- `debounce`
- `debounceTime`
- `distinctUnitChanged`
- `filter(select: Function, thisArg: any): Observable` 发出符合给定条件的值
- `first(predicate: Function, select: Function)` 发出第一个值或第一个通过给定表达式的值
- `ignoreElements`
- `last(predicate: Function)` 根据提供的表达式，在源observable完成时发出它的最后一个值
- `smaple(sample: Observable): Observable` 从源observable中取样
- `single(a: Function): Observable` 发出通过表达式的单一项
- `skip(the: Number): Observable`
- `skipUntil(the: Observable): Observable` 跳过源 observable 发出的值，直到提供的 observable 发出值
- `skipWhile`
- `take(count: Number): Observable` 在完成前发出N个值（N由参数决定）
- `takeUntil`
- `takeWhile`
- `throttle`
- `throttleTime`
## 转换
- `buffer`
- `bufferCount`
- `bufferTime`
- `bufferToggle`
- `bufferWhen`
- `concatMap`
- `concatMapTo`
- `exhaustMap`
- `expand`
- `exhaustMap`
- `groupBy`
- `map`
- `mapTo`
- `mergeMap`
- `partition`
- `pluck(properties: ...args): Observable` 选择属性来发出
- `reduce(accumulator: Function, seed: any): Observable` 归并为单个值，当Observable完成时将值发出
- `scan(accumulator: Function, seed: any): Observable` 随时间的推移进行归并
- `switchMap`
- `window`
- `windowCount`
- `windowTime`
- `windowToggle`
- `windowWhen`
## 工具
- `do`
- `delay`
- `delayWhen`
- `dematerialize`
- `let`
- `timeout`
- `toPromise`

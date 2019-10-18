import { interval } from "rxjs"
import { bufferCount } from "rxjs/operators"

// 收集缓冲区并在指定数量的值后发出
/*
interval(1000)
  .pipe(bufferCount(3))
  .subscribe(console.log) // [0,1,2]...[3,4,5]
*/

// 重叠的缓冲
interval(1000)
  .pipe(bufferCount(3, 2))
  .subscribe(console.log)

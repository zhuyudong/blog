import { timer } from "rxjs"

// 1s 后发出后结束
timer(1000).subscribe(console.log) // 0

// 1s 后发出，然后间隔2s继续...
timer(1000, 2000).subscribe(console.log) // 0 1 2...

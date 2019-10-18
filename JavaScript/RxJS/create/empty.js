import { empty } from "rxjs"

empty().subscribe({
  next: () => console.log("Next"),
  complete: () => console.log("Complete")
}) // Complete

// 使用定时器的empty

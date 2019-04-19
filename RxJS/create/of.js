import { of } from "rxjs"

of(1, 2, 3, 4, 5).subscribe(console.log)
of({ name: "Brain" }, [1, 2, 3], () => "Hello").subscribe(console.log)

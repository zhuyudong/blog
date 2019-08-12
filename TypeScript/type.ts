let isDone: boolean = false

let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

let name1: string = "bob"
name1 = "smith"
let age: number = 37
let name2: string = `Gene`
let sentence: string = `Hello, my name is ${name2}

I'll be ${age + 1} years old next month`

let list1: number[] = [1, 2, 3]
let list2: Array<number> = [4, 5, 6]

let x: [string, number]
x = ["hello", 10]
x = [10, "hello"]
console.log(x[0].substr(1))
console.log(x[1].substr(1))
x[3] = "world"
console.log(x[5].toString())
x[6] = true

/* enum */
enum Color1 { // 默认从0开始编号
  Red,
  Green,
  Blue
}
let c1: Color1 = Color1.Green
enum Color2 {
  Red = 1,
  Green,
  Blue
}
let c2: Color2 = Color2.Green
enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c3: Color3 = Color3.Green
let colorName: string = Color3[1]
console.log(colorName) // -> Green

/* Any */
let notSure: any = 4
notSure = ""
notSure = true
notSure.ifItExists()
notSure.toFixed()
let prettySure: Object = 4
prettySure.toFixed()

/* Void */
function warnUser(): void {
  console.log("This is my warning message")
}

/* Null 和 Undefined */
let n1: null = null
let n2: null = undefined
let u1: undefined = undefined
let u2: undefined = null

/* Never */
function error(message: string): never {
  throw new Error(message)
}
function fail() {
  return error("Something failed")
}
function infiniteLoop(): never {
  while (true) {}
}

/* Object */
declare function create(o: object | null): void
create({ prop: 0 })
create(null)
create(2)
create("string")
create(false)
create(undefined)

/* 类型断言 */
let someValue1: any = "this is a string"
let strLength1: number = (<string>someValue1).length
// ts 中使用 jsx，只能使用 as 语法
let someValue2: any = "this is a string"
let strLength2: number = (someValue2 as string).length

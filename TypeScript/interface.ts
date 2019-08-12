function printLabel1(labelObject: { label: string }) {
  console.log(labelObject.label)
}
let myObj = { size: 10, label: "Size 10 Object" }
printLabel1(myObj)

// 1
interface LabeledValue {
  label: string
}
function printLabel2(labelObject: LabeledValue) {
  console.log(labelObject.label)
}

// 2 可选属性
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any // 索引签名
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare1 = createSquare({ color: "black" })
// 如 SquareConfig 不含 propName，则如下报错
let mySquare2 = createSquare({ colour: "red", width: 100 })

// 3 只读属性
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }
p1.x = 5

let a1: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12
ro.push(5)
r0.length = 100
a1 = ro
a1 = ro as number[]

// 4 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}
// 参数名不需要一致
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}
mySearch = function(src, sub) {
  let result = src.search(sub)
  return result > -1
}

// 5 可索引的类型
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ["Bob", "Fred"]
let myStr: string = myArray[0]

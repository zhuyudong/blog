// 类声明空间
class Foo {}
interface Bar {}
type Bas = {}
// 类型注解
let foo : Foo
let bar : Bar
let bas : Bas
// const bar1 = Bar // error TS2693: 'Bar' only refers to a type, but is being
// used as a value here.
const someVar = Foo

// 变量声明空间
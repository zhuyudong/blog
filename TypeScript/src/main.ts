function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User";
// let user = [1, 2, 3]; // TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
// document.body.innerHTML = greeter(user);

let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral : number = 0b1010;
let octalLiteral: number = 0o744;

let unusable: void = undefined;
// null 和 undefined 类型是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

// let name: string = 'blob';
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: any[] = [1, true, 'string'];
list3[1] = 100;

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

function warnUser(): void {
  alert('This is my warning message');
}

// 返回never的函数必须存在无法达到的终点
//  never类型是任何类型的子类型，也可以赋值给任何类型，但是没有类型是never的子类型或可以赋值给never类型
function error(message: string): never {
  throw new Error(message);
}
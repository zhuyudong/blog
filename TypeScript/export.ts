// method 1
export const someVar1 = 123
export type someType1 = {
  foo: string
}

// method 2
const someVar2 = 123
type someType2 = {
  foo: string
}
export {someVar2, someType2}

// method 3
const someVar3 = 123
type someType3 = {
  foo: string
}
export {someType3 as aDifferentName}

// method 4
let someVar4
export default(someVar4 = 123)

/*
  method 5
export default function someFunction() {}
  method 6
export default class someClass {}
*/
function f() {
  console.log("f(): evaluated")
  return function(target, propertyKey: string, descriptor: PropertyDecorator) {
    console.log("f(): called")
  }
}

function g() {
  console.log("g(): evaluated")
  return function(target, propertyKey: string, descriptor: PropertyDecorator) {
    console.log("g(): called")
  }
}

class C {
  @f()
  @g()
  method() {}
}

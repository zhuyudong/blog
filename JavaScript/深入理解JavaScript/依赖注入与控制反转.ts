class B {}

class A {
  constructor(b: B) {
    console.log(b)
  }
}

const b = new B()
// 将B的实例注入，即依赖注入（DI）
const a = new A(b)

/* 非依赖注入 */
export class Engine {
  public cylinders = "引擎发动机"
}
export class Tires {
  public make = "品牌"
}
export class Car {
  public engine: Engine
  public tires: Tires
  public description = "No DI"
  constructor() {
    this.engine = new Engine()
    this.tires = new Tires()
  }
  dirve() {
    return (
      `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`
    )
  }
}

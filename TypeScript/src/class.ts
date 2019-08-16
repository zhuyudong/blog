class Person {
  // 方法和属性默认 pulic
  // public 相当于声明
  constructor(public name:string, age: number) {
    console.log('constructor');
  }
  // name:string;
  private age:number;
  // 可以在内部和子类访问，外部不能访问
  protected sec:string;
  public eat() {
    console.log(this.name);
  }
}

var p1 = new Person('p1', 20);
// p1.name = 'batman';
p1.eat();

var p2 = new Person('p2', 30);
// p2.name = 'superman';
p2.eat();

class Employee extends Person {
  constructor(name:string, age:number, code:string) {
    super(name, age);
    this.code = code;
  }
  code: string;
  work() {
    super.eat();
    this.doWork();
  }
  // 外部不能调用
  private doWork() {
    console.log('im working');
  }
}

var e1 = new Employee('name', 40, 'child code');
e1.eat();
e1.work();

// 泛型 generic
var workers: Array<Person> = [];
workers[0] = new Person('zhangsan', 5);
workers[1] = new Employee('lisi', 2, '');

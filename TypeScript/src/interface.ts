// 接口 interface
// 1 声明属性
interface IPerson {
  name: string;
  age: number;
}
class Person {
  constructor(public config: IPerson) {

  }
}
var p1 = new Person({
  name: 'zhangsan',
  age: 18
});

// 2 声明方法
interface Animal {
  eat();
}
class Sheep implements Animal {
  eat() {
    console.log('必须实现接口定义的方法');
  }
}
class Tiger implements Animal {
  eat() {
    console.log('tiger eat');
  }
}
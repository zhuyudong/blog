@SpringBootApplication

- @Configuration
- @EnableAutoConfiguration
- @ComponentScan

src/main/resources/application.properties 等效于 application.yaml
默认 Thymeleaf 模板引擎
Character 用单引号
运行 shift + control + R

Socket 过程：

1. 服务器实例化一个 ServerSocket 对象，表示通过服务器上的端口通信
2. 服务器调用 ServerSocket 类的 accept 方法，该方法一直等待，直到客户端连接到服务器上给定的端口
3. 服务器正在等待时，一个客户端实例化一个 Socket 对象，指定服务器名称和端口号来请求连接
4. Socket 类的构造函数试图将客户端连接到指定的服务器和端口号，如果通信建立，则在客户端创建一个 Socket 对象能够与服务器进行通信
5. 在服务器端，accept 方法返回服务器上一个新的 socket 引用，改 socket 连接到客户端的 socket

多态：

1. 消除类型之间的耦合
2. 可替换性
3. 可扩充性
4. 接口性
5. 灵活性
6. 简化性

多态存在的必要条件：继承、重写、父类引用指向子类对象
虚函数的存在是为了多态

多态实现方式：重写、接口、抽象类和抽象方法

javac -d . Runoob.java 会编译出 Runoob.class 和 Google.class 文件

```java
// 文件名: Runoob.java
package com.runoob.test;
public class Runoob {

}
class Google {

}
```

接口描述类要实现的方法

接口与类的区别：

- 接口不能实例化
- 接口没有构造方法
- 接口中的所有方法必须是抽象方法
- 接口不能包含成员变量，除了 static 和 final 变量
- 接口不是被类继承了，而是要被类实现
- 接口支持多继承
- 每个方法都是隐式的 public abstract
- 每个变量都是隐式的 public static final

标记接口：没有任何方法

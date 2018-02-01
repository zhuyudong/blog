闭包（closure）：保留局部变量不被释放的代码块（函数），称之为闭包
高阶函数（Higher-order function）:接受或返回一个函数的函数称之为高阶函数
柯里化（currying）：给一个函数传递部分参数，返回一个接收其它参数的新函数
组合（composing）：将多个函数的能力合并，返回一个新函数

this
普通调用，指向调用者
call/apply调用，指向当前thisArg参数
箭头函数，指向当前函数的this
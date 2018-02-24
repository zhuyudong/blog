node中直接运行es6代码方式：
1. 使用 `require('babel-register')` hook
2. 全局使用 `babel-node` repl
3. node 中加载es6模块 `node --experimental-modules module.mjs`

ES6模块中不存在一下变量
- arguments
- require
- module
- exports
- __filename
- __dirname

CommonJS模块在加载时会全部执行

ES6模块自动采用严格模式
- 变量必须声明后使用
- 函数的参数不能有同名属性，否则会报错
- 不能使用with语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀0表示八进制数，否则报错
- 不能删除不可删除属性，否则报错
- 不能删除变量delete prop，会报错，只能删除属性 delete global[prop]
- eval 不会再它的外层作用域引入变量
- eval 和 arguments 不能被重新赋值
- arguments不会自动反应函数参数的变化
- 不能使用 arguments.callee
- 不能使用 arguments.caller
- 禁止 this 指向全局对象
- 不能使用 fn.caller 和 fn.arguments 获取函数调用栈
- 增加了保留字 protected、static、interface
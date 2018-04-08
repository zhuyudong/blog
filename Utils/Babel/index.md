1. 解析：将代码字符串解析成抽象语法树（AST对象）
2. 变换：对抽象语法数进行变换操作
3. 再建：根据变换后的抽象语法树再生成代码字符串（递归）

babel-types 为AST节点提供的lodash类的实用程序库
babel-register require钩子会将自己绑定到node的require上并且能自动即时编译
babel-template 从一个字符串模板生成AST
babel-helpers babel转换的帮助函数集合
babel-core-frame 生成指向源位置包含代码帧的错误
babylon 用于babel的JS解析器

var babel = require('babel-core');
import { transform } from 'babel-core';
import * as babel from 'babel-core';

babel.transform(code: string, options?:Object)
babel.transformFile(filename: string, options?:Object, callback: Function)
babel.transformFile(filename: string, options?:Object)
babel.transformFromAst(ast: Object, code:string, options?: Object)

Options:
ast: true
babelrc: true
code: true 启用代码生成选项
comments: true 在生成的代码中添加注释
env: {
  production: {},
  development: {}
}
extends: null 扩展babelrc路径


.babelrc env的值从 process.env.BABEL_ENV 获取，获取不到从 process.env.NODE_ENV 获取 默认 development，也可以写入SHELL中 export BABEL_ENV=production
{
  env: {
    production: {},
    development: {}
  },
  presets: [],
  plugins: [

  ],
  ignore: [
    'foo.js',
    'bar/**/*.js'
  ]
}

通过package.json使用.babelrc
{
  "babel": {

  }
}
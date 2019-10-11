## 分类方法

- 官方与非官方
- 插件与预设
- 语法与 api

## 用法

- `.babelrc`

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ],
    "@babel/preset-react"
  ]
```

- cli

  - `babel script.js` 依赖 `@babel/core` 和 `@babel-cli`
  - `babel script.js --out-file script-compiled.js` 输出到文件，`--out-file` 等效于 `-o`
  - `babel script.js --watch -o script-compiled.js` 每次修改后输出到文件，`--watch` 等效于 `-w`
  - `babel script.js --out-file script-compiled.js --source-maps` 输出源码映射表
  - `babel script.js --out-file script-compiled.js --source-maps inline` 使用内联码映射表
  - `babel src --out-dir lib` 编译整个目录
  - `babel src --out-dir script-compiled.js` 编译整个目录并输出为一个文件
  - `babel src --out-dir lib --ignore "src/**/*.spec.js","src/**/*.test.js"` 忽略某些文件
  - `babel src --out-file lib --copy-files` 拷贝不需要编译的文件
  - `babel --out-file script-compiler.js < script.js` 通过管道输入文件
  - `babel script.js --out-file script-compiled.js --plugins=@babel/proposal-class-properties,@babel/transform-modules-amd` 使用插件
  - `babel script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/flow` 使用插件
  - `babel script.js --presets @babel/preset-react` 使用预设
  - `babel --no-babelrc script.js --out-file script-compiled.js --presets=es2015,react` 忽略 `.babelrc` 文件

- node api

```js
require("@babel/core").transform("code", {
  preset: ["@babel/preset-react"]
})
```

- `babel.config.js` 编译 `node_modules` 目录下模块

```js
module.exports = function(api) {
  api.cache(true)
  const presets = []
  const plugins = []
  return {
    presets,
    plugins
  }
}
```

- `package.json`

```json
{
  "babel": {
    "presets": [],
    "plugins" []
  }
}
```

- `.babelrc.js`

```js
const presets = []
const plugins = []
module.exports = { presets, plugins }
```

### 工具

### 执行顺序

1. plugin 从上到下
2. preset 从右至左

典型 plugin 和 preset 配置选项
如何兼容低版本浏览器，哪些做不到兼容
不同场景下的最佳实践
哪些 plugin 可能有问题
各 plugin 或 preset 之间的包含关系
plugin 如何解析 javascript
哪些不同的 plugin 可以完成相同或类似的问题
如何升级 babel
哪些 plugin 已被 deprecated 或替代
命令式用法
不同环境配置差异

- `@babel/core`
- `@babel-cli`
- `@babel/plugin-proposal-class-properties`
- `@babel/plugin-proposal-decorators`
- `@babel/plugin-proposal-export-namespace-from`
- `@babel/plugin-proposal-function-sent`
- `@babel/plugin-proposal-numeric-separator`
- `@babel/plugin-proposal-object-rest-spread`
- `@babel/plugin-proposal-throw-expressions`
- `@babel/plugin-transform-modules-commonjs`
- `@babel/plugin-transform-runtime`
- `@babel/preset-env`
- `@babel/preset-react`
- `babel-eslint`
- `@babel/preset-stage-0`
- `@babel/preset-stage-1`
- `@babel/preset-stage-2`
- `@babel/preset-stage-3`
- `@babel/preset-flow`
  - `@babel/plugin-transform-flow-strip-types`
- `babel-preset-minify`
- `@babel/preset-typescript`
  - `@babel/plugin-transform-typescript`
- `@babel/parser`
- `@babel/generator`
- `@babel/code-frame`
- `@babel/helpers`
- `@babel/runtime`
- `@babel/template`
- `@babel/traverse`
- `@babel/types`


[@babel/preset-env 包含的插件列表](https://github.com/babel/babel-preset-env/blob/master/data/plugin-features.js)

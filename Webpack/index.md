### 核心包

- webpack
- webpack-cli
- loader-utils

### loaders

- 转换编译：script-loader/babel-loader/ts-loader/coffee-loader 等。
- 处理样式：style-loader/css-loader/less-loader/sass-loader/postcss-loader 等。
- 处理文件：raw-loader/url-loader/file-loader/等。
- 处理数据：csv-loader/xml-loader 等。
- 处理模板语言：html-loader/pug-loader/jade-loader/markdown-loader 等。
- 清理和测试：mocha-loader/eslint-loader 等。

分割代码：路由、复杂的交互页

webpack --json > stats.json 供分析

### 知识点：

- 图片处理
- 跨域
- 懒加载
- resolve
- 抽离公共代码
- plugin
- loader
- AsyncParralleHook
- babel-loader
- IgnorePlugin
- 全局变量
- 打包文件分类
- source-map
- happypack
- 样式处理
- file-loader
- url-loader
- AsyncSeriesHook
- css-loader
- tapable
- 环境
- 多页面
- html 插件
- 输出文件解析
- banner-loader
- 优化
- dllPlugin
- 热更新
- babel
- 依赖关系
- watch
- 自动发布
- noParse
- less-loader
- css-loader
- AST 递归解析
- AsycSeriesWaterfall

### 规则

loader 中从右至左执行
构建类包使用 output.library: "root" 和 output.libraryTarget: "umd"

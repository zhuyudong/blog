### core

- webpack
- webpack-cli

### webpack plugins

- `AggressiveSplittingPlugin`
- `ZopfliWebpackPlugin`
- `BannerPlugin` 为每个 chunk 文件添加头部 banner

```js
new webpack.BannerPlugin({
  banner: string,
  raw: boolean,
  entryOnly: boolean,
  test: string | RegExp | Array
  include: string | RegExp | Array
  exclude: string | RegExp | Array
})
```

- `ClosureWebpackPlugin`
- `CommonsChunkPlugin`
- `ComponentWebpackPlugin`
- `CompressionWebpackPlugin`
- `ContextReplacementPlugin`
- `CopyWebpackPlugin`
- `DefinePlugin`

```js
new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(true),
  VERSION: JSON.stringify("5fa3b9"),
  BROWSER_SUPPORTS_HTML5: true,
  TWO: "1+1",
  "typeof window": JSON.stringify("object")
})
```

- `DllPlugin`
- `EnvironmentPlugin` 通过 `DefinePlugin` 设置 `process.env` 环境变量

```js
new webpack.EnvironmentPlugin(["NODE_ENV", "DEBUG"])
// 等效于
new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  "process.env.DEBUG": JSON.stringify(process.env.DEBUG)
})
```

- `EvalSourceMapDevToolPlugin`
- `ExtractTextWebpackPlugin` 从 bundle 或 bundles 中解析出单独文件
- `HashedModuleldsPlugin`
- `HotModuleReplacementPlugin` 热替换（HMR）

```js
new webpack.HotModuleReplacementPlugin()
```

- `HtmlWebpackPlugin`
- `BabelMinifyWebpackPlugin`

```bash
npm install babel-minify-webpack-plugin
```

```js
const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = {
  entry: //...,
  output: //...,
  plugins: [
    new MinifyPlugin(minifyOpts, pluginOpts)
  ]
}
```

- `IgnorePlugin(requestRegExp, [contextRegExp])` 防止 import 或 require 调用时，生成指定的正则匹配模块

```js
new webpack.IgnorePlugin(/\/locales/, /moment$/)
```

- `LimitChunkCountPlugin`
- `LoaderOptionsPlugin`
- `MinChunkSizePlugin`

```js
new webpack.optimize.MinChunkSizePlugin({
  minChunkSize: 10000 // Minimum number of characters
})
```

- `ModuleConcatenationPlugin`
- `NamedModulesPlugin`
- `NoEmitOnErrorsPlugin`
- `NormalModuleReplacementPlugin`
- `NpmInstallWebpackPlugin`
- `PrefetchPlugin([context], request)`
- `ProfilingPlugin` 生成 Chrome profile file

```js
new webpack.debug.ProfilingPlugin({
  outputPath: "profiling/profileEvents.json" // 默认events.json
})
```

- `ProvidePlugin` 自动加载模块

```js
new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  React: "react",
  _map: ["lodash", "map"]
})
```

- SourceMapDevToolPlugin
- SplitChunksPlugin
- UglifyjsWebpackPlugin
- WatchIgnorePlugin
- I18nWebpackPlugin

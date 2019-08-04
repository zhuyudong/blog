const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // 必填项
  mode: 'development',
  entry: './src/index.js',
  // 默认8080端口
  devServer: {
    port: 3000,
    open: true,
    contentBase: './dist'
  },
  module: {
    noParse: /jquery/, // 不解析指定包中的依赖库
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // 优先从指定文件中查找
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
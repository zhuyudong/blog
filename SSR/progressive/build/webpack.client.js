const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base')

const clientConfig = {
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  // 入口，有字符串、数组、对象 3 种写法
  entry: {
    client: '../src/client/index.js'
  },
  resolve: {
    modules: [path.resolve('../src/client'), 'node_modules']
  },
  module: {
    rules: [
      {
        /*
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
        //*/
        /*
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
        //*/
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
    // new MiniCssExtractPlugin({
    //   filename: "style.css"
    // })
  ],
  // 输出目录及文件名，path、filename 必须
  output: {
    filename: '[name].bundle.js',
    // 输出目录，如不存在则自动创建
    path: path.resolve(__dirname, '../public')
  }
}

module.exports = merge(baseConfig, clientConfig)

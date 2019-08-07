const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const nodeExternals = require('webpack-node-externals')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base')

const serverConfig = {
  // server 端必须
  target: 'node',
  mode: 'development',
  // 如果不指定此选项，默认从项目根目录查找
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
  // server 端必须
  externals: [nodeExternals()],
  // 入口，有字符串、数组、对象 3 种写法
  entry: {
    server: '../src/server'
  },
  resolve: {
    modules: [path.resolve('../src/server'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          // {
          //   loader: "postcss-loader",
          //   options: { plugins: [autoprefixer()] }
          // }
        ]
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]',
          publicPath: url => url.replace(/public/, ''),
          emit: false
        }
      }
    ]
  },
  // plugins: [
  //   new FriendlyErrorsWebpackPlugin(),
  //   new MiniCssExtractPlugin({
  //     filename: "style.css"
  //   }),
  //   new BundleAnalyzerPlugin({
  //     analyzerMode: "static",
  //     reportFilename: "webpack.report.html",
  //     openAnalyzer: false
  //   })
  // ],
  // 输出目录及文件名，path、filename 必须
  output: {
    filename: '[name].bundle.js',
    // 输出目录，如不存在则自动创建
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  }
}

module.exports = merge(baseConfig, serverConfig)

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base')

const clientConfig = {
  mode: 'development',
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
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
        /* production
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //   use: [
        //     {
        //       loader: "css-loader",
        //       options: { importLoaders: 1, modules: { localIdentName: '[path][name]__[local]--[hash:base64:5]' } }
        //     },
        //     {
        //       loader: "postcss-loader",
        //       options: { plugins: [autoprefixer()] }
        //     }
        //   ]
        // }),
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }, {
            loader: "postcss-loader",
            options: { plugins: [autoprefixer()] }
          }
        ]
        // */
        /// * development
        test: /\.css$/,
        use: [
          'style-loader',
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
        //* /
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]',
          publicPath: url => url.replace(/public/, '')
        }
      }
    ]
  },
  plugins: [
    // new FriendlyErrorsWebpackPlugin()
    // new MiniCssExtractPlugin({
    //   filename: "style.css"
    // }),
    // new ExtractTextPlugin({
    //   filename: "public/css/[name].css"
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

const path = require("path")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry: "./src/index.js", // 默认输出 main.js
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "js/" + "[id].[name].[hash:8].js" // hash根据文件内容变化，名为20位长度
  },
  externals: {
    react: "React",
    "react-dom": "ReactDom"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
        // include: './src',
        // exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'mainfest',
    //   minChunks: Infinity
    // }),
    // new webpack.ProvidePlugin({
    //   Promise: 'exports-loader?global.Promise!es6-promise',
    //   fetch: 'exports-loader?self.fetch!whatwg-fetch'
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'src/templates/index.temp.html'),
    //   filename: 'index.html',
    //   inject: 'body'
    // }),
    new CleanWebpackPlugin()
    // new CopyWebpackPlugin([
    //   {
    //     from: 'node_modules/react/umd/react.production.min.js',
    //     to: 'js/react.min.js'
    //   },
    //   {
    //     from: 'node_modules/react-dom/umd/react-dom.production.min.js',
    //     to: 'js/react-dom.min.js'
    //   },
    //   // {from: 'public/favicon.ico', to: 'favicon.ico'}
    // ])
  ]
}

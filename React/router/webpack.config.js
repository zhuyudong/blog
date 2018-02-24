const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    }, {
      test: /.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
}
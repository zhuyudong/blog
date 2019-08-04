const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    // test: './src/test.js'
    react: ['react', 'react-dom']
  },
  output: {
    filename: '_dll_[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]',
    // libraryTarget: 'var' // commonjs|var|this|umd
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]', // name 一定要等于 library
      path: path.resolve(__dirname, 'dist', 'manifest.js')
    })
  ]
}
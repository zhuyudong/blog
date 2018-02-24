const { resolve } = require('path');
const address = require('address');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PORT = 3001;
const HOST = address.ip();
const ROOT_PATH = resolve(__dirname);
const APP_PATH = resolve(ROOT_PATH, '../src');
const INDEX_FILE = resolve(APP_PATH, 'index.js');
const BUILD_PATH = resolve(ROOT_PATH, '../build');

module.exports = {
  entry: [
    // 'react-hot-loader/patch',
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    INDEX_FILE
  ],
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  
  devServer: {
    contentBase: BUILD_PATH,
    publicPath: '/',
    clientLogLevel: 'none',
    compress: true,
    historyApiFallback: true,
    hot: true,
    stats: 'errors-only',
    host: HOST,
    port: PORT 
  },
  //*/
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'lesss-loader',
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|ttf|eot|woff|woff2|gif)(\?|$)/,
        use: 'file-loader?name=[hash].[ext]'
      },
      {
        test: /\.(png|jpe?g|bmp)$/,
        use: 'url-loader?limit=2048&name=[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new CleanWebpackPlugin(['*'], {
      root: BUILD_PATH,
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../template/index.tmp.html'),
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.sass', '.less', '.json'],
    alias: {
      '@': `${APP_PATH}/`
    }
  }
}
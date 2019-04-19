const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const BundleAnalyzerPlugin = require('');
module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: '',
    hot: true
  },
  /**
   *   entry: [ require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    require.resolve('react-error-overlay'),
    'src/index.js'
  ]
   */
  entry: {
    main: './src/index.js',
    second: './src/index2.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    // [name] [id] [hash] [chunkhash] [ext]
    path: path.join(__dirname, './dist'),
    pathInfo: true,
    name: 'js/bundle-[name]-[hash].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/dist/',
    devtoolModuleFilenameTemplate: info => path
      .resolve(info.absoluteResourcePath)
      .replace(/\\/g, '/')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [
      '.web.js', '.js', '.json', '.web.jsx', '.jsx'
    ],
    alias: {
      'react-native': 'react-native-web'
    },
    plugins: [new ModuleScopePlugin('/src')]
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: 'src'
      }, {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        },
        /**
         * use: [
                    {
                        loader: "babel-loader"
                    }, {
                        loader: "eslint-loader",
                        options: {
                            fix: true,
                        }
                    }
                ],
         */
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new webpack
      .optimize
      .CommonsChunkPlugin({name: 'vendor', filename: "js/[name]-[chunkhash].js"}),
    new webpack
      .optimize
      .CommonsChunkPlugin({name: "manifest", minChunks: Infinity}),
    new webpack.ProvidePlugin({Promise: "exports-loader?global.Promise!es6-promise", fetch: "exports-loader?self.fetch!whatwg-fetch"}),
    new HtmlWebpackPlugin({filename: "index.html", template: "app/index.html", inject: "body"}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new CleanWebpackPlugin(["js"], {
      root: __dirname + "/stu/",
      verbose: true,
      dry: false
    }),
    new BundleAnalyzerPlugin({analyzerMode: 'static'})
  ]
}
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MainfestPlugin = require('webpack-mainfest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DashBoardPlugin = require('webpack-dashboard-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  constent: __dirname,
  entry: {
    main: 'src/index.js'
  },
  output: {
    pathinfo: true,
    path: 'build',
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => {
      console.log('devtoolModuleFilenameTemplate: ', info);
      return path.resolve(info.absoluteResourcePath).replace(/\\/, '/')
    }
  },
  devtool: '',
  target: 'web',
  externals: [nodeExternals()],
  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      enforce: 'pre',
      use: [{
        loader: require.resolve('eslint-loader'),
        options: {
          formatter: eslintFormatter
        }
      }],
      include: __dirname + '/src'
    }, {
      oneOf: [{
        test: /\.(bmp|jpe?g|png|gif)/,
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }, {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            ['env', {
              targets: {
                browsers: ''
              },
              debug: true,
              useBuitIns: true
            }]
          ],
          cacheDirectory: true
        }
      }, {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [ // 采用 ai/browserlist 语法  https://github.com/ai/browserslist
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      }, {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          require.resolve('less-loader')
        ]
      }, {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          require.resolve('sass-loader')
        ]
      }, {
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '版权所有，翻版必究',
      raw: true,
      entryOnly: true,
      test: __dirname + '/src',
      exclude: [/node_modules/]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _map: ['lodash', 'map'],
      Vue: ['vue/dis/vue.esm.js', 'default'],
      Promise: 'exports-loader?global.Promise!es6-promise',
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify('true'),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORT_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false
      },
      mangle: {
        safari10: true
      },
      output: {
        comments: false,
        ascii_only: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'mainfest',
      minChunks: Infinity
    }),
    new MainfestPlugin({
      filename: 'asset-mainfest.json'
    }),
    new ExtractTextPlugin('static/css/[name].[contenthash:8].[ext]'),
    new HtmlWebpackPlugin({
      template: path.resolve('src/template/index.tmpl.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new CaseSensitivePathsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new DashBoardPlugin()
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  performance: {
    hints: false
  }
}
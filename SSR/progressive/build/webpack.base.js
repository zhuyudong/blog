// const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        // exclude: path.resolve(__dirname, 'node_modules')
        // 如存在 .babelrc 则去读取相应配置，效果等同于如下
        /*
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
                // modules: false
                // useBuiltIns: 'usage'
              }
            ],
            '@babel/preset-react'
          ]
          // plugins: [
          //   [
          //     import,
          //     {
          //       libraryName: "antd",
          //       style: true
          //     }
          //   ]
          // ]
        }
        // */
      }
    ]
  }
}

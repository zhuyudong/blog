require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    // [
    //   'css-modules-transform',
    //   {
    //     camelCase: true,
    //     extensions: ['.css', '.scss']
    //   }
    // ],
    'dynamic-import-node'
  ]
})
require('./src/server')

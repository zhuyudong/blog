module.exports = {
  plugins: [
    [require('babel-plugin-transform-es2015-classes'), {loose: true}],
    require('babel-plugin-transform-es2015-object-super')
  ]
}
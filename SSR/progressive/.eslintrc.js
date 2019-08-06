module.exports = {
  // 指定解析器
  // parse: '',
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  // 指定解析器选项
  parserOptions: {},
  // 指定脚本的运行环境
  env: {
    browser: true,
    es6: true
  },
  // 别人可以直接使用你配置好的ESLint
  root: true,
  // 脚本在执行期间访问的额外的全局变量
  globals: {},
  // 启用的规则及其各自的错误级别
  rules: {
    'react/prop-types': 0
  }
}

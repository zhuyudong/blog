module.exports = {
  // 指定解析器
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:react/recommended",
    "prettier",
    "plugin:jsx-control-statements/recommended"
  ],
  // 指定脚本的运行环境
  env: {
    browser: true,
    jest: true,
    node: true
  },
  // 指定解析器选项
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  // 别人可以直接使用你配置好的ESLint
  root: true,
  // 脚本在执行期间访问的额外的全局变量
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  // 启用的规则及其各自的错误级别
  rules: {
    "react/prop-types": 0,
    experimentalDecorators: 0,
    "react/jsx-no-undef": [
      0,
      {
        allowGlobals: true
      }
    ],
    "jsx-control-statements/jsx-use-if-tag": 0,
    "no-console": 0,
    "standard/no-callback-literal": 0,
    quotes: [1]
  },
  plugins: ["prettier", "standard", "react", "babel", "jsx-control-statements"]
}

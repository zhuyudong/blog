/**
 * Parse 过程 - 词法分析（Lexical Analysis）
 * @param codeString 待转化的字符串
 * @return Tokens 令牌流
 */
function tokens(codeString) {
  let tokens = [] //存放 token 的数组

  let current = 0 //当前的索引
  while (current < codeString.length) {
    let char = codeString[current]

    //先处理括号
    if (char === "(" || char === ")") {
      tokens.push({
        type: "parens",
        value: char
      })
      current++
      continue
    }

    //处理空格，空格可能是多个连续的，所以需要将这些连续的空格一起放到token数组中
    const WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      let value = ""
      while (current < codeString.length && WHITESPACE.test(char)) {
        value = value + char
        current++
        char = codeString[current]
      }
      tokens.push({
        type: "whitespace",
        value: value
      })
      continue
    }

    //处理连续数字,数字也可能是连续的，原理同上
    let NUMBERS = /[0-9]/
    if (NUMBERS.test(char)) {
      let value = ""
      while (current < codeString.length && NUMBERS.test(char)) {
        value = value + char
        current++
        char = codeString[current]
      }
      tokens.push({
        type: "number",
        value: value
      })
      continue
    }

    //处理标识符，标识符一般以字母、_、$开头的连续字符
    const LETTERS = /[a-zA-Z\$\_]/
    if (LETTERS.test(char)) {
      let value = ""
      //标识符
      while (current < codeString.length && /[a-zA-Z0-9\$\_]/.test(char)) {
        value = value + char
        current++
        char = codeString[current]
      }
      tokens.push({
        type: "identifier",
        value: value
      })
      continue
    }

    //处理 , 分隔符
    const COMMA = /,/
    if (COMMA.test(char)) {
      tokens.push({
        type: ",",
        value: ","
      })
      current++
      continue
    }

    //处理运算符
    const OPERATOR = /=|\+|>/
    if (OPERATOR.test(char)) {
      let value = ""
      while (OPERATOR.test(char)) {
        value += char
        current++
        char = codeString[current]
      }
      //如果存在 => 则说明遇到了箭头函数
      if (value === "=>") {
        tokens.push({
          type: "ArrowFunctionExpression",
          value
        })
        continue
      }

      tokens.push({
        type: "operator",
        value
      })
      continue
    }
    throw new TypeError(`还未加入此字符处理 ${char}`)
  }
  return tokens
}

/**
 * Parse 过程 - 语法分析（Synctactic Analysis）
 * @param tokens 令牌流
 * @return AST
 */
const parser = tokens => {
  let current = -1
  const tem = []
  let token = tokens[current]

  const parseDeclarations = () => {
    setTem()
    next()
  }
}

tokens("const add = (a, b) => a + b")

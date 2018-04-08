```bash
npm init --yes
npm init -y
npm install webpack
npm install webpack@4.1.0
npm install webpack@latest
npm install ./local-module/ # 包含package.json
npm install ./module.tar.gz
npm install https://registry.npmjs.org/webpack/-/webpack-4.1.0.tgz
npm install git@github.com:webpack/webpack.git
npm install git+ssh://git@github.com:npm/npm.git#v1.0.27
npm install git+ssh://git@github.com:npm/npm#semver:^5.0
npm install git+https://isaacs@github.com/npm/npm.git
npm install git://github.com/npm/npm.git#v1.0.27

# npm2 是树状的，可能会有很深的路径，另外有冗余，npm3开始走向扁平化
npm ls # 查看安装依赖树
npm ls --depth 1
# 安装为传统的树状结构
npm install --global-style
# npm5 开始增加 package-lock.json
# 删除配置项
npm config delete <key>
```

优化`const config = require('../../../config.js');`
1. 重命名 config.js 为 config/index.js，config/package.json
```json
{
  "name": "config",
  "main": "index.js"
  "version": "0.1.0"
}
```
2. package.json
```json
{
  "engines": { "node": ">7.6.0" },
  "dependencies": {
    "config": "file:./config"
  }
}
```
3. `npm install file:./config`

npm5 开始增加 package-lock.json，类似于 npm shrinkwrap，主要包含 version、resolved、integrity、requires、dependencies
禁用package-lock.json  `npm config set package-lock false`

语义化（semver）版本 MAJOR.MINOR.PATCH


.npmrc，优先级：项目内、用户级、全局/etc/npmrc(`npm config get globalconfig`)、npm内置
```
proxy=http://proxy.example.com/
https-proxy=http://proxy.example.com/
registry=http://registry.example.com/
```

### npx
执行远程包命令 `npx cowsay hello`  
`npx workin-hard`  
执行 Github Gist `npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32`
执行不同版本的node  
`npx node@4 -e "console.log(process.version)"`  
`npx node@6 -e "console.log(process.version)"` 


[2018 年了，你还是只会 npm install 吗？](https://mp.weixin.qq.com/s?timestamp=1522372368&src=3&ver=1&signature=I3hkAU8fpe1TOuZPip9iZiLDu1qMcWJGcKXWyx0hzsV7JaYGiPnr0if2e0FgKSIkvohGUkOsQt-pkQdc0tRFX7VDZ2s67htJfn8dTajydbLkqsjOcNRUkRO2PZ*YNsyJjVLygEcQz9x6PczoGmp92oB4vLXtNHhLXbq6vsWSfjg=)
https://semver.npmjs.com

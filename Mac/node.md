## 安装[nvm](https://github.com/creationix/nvm/blob/master/README.md)
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
# 使用国内镜像
echo 'export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node' >> ~/.zshrc
source ~/.zshrc

# 全局安装 cnpm
npm --registry=https://registry.npm.taobao.org install cnpm -g
```

通过 brew 安装的 npm 路径 `/usr/local/lib/node_modules/npm`
通过 brew 安装的 node 路径 `/usr/local/bin/node`
```bash
# 删除全局 node_modules 目录
sudo rm -rf /usr/local/lib/node_modules 
# 删除 node
sudo rm /usr/local/bin/node 
#删除全局 node 模块注册的软链
cd  /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm 
```

# 安装全局包
```bash
npm i cnpm -g
npm i npm-check -g
npm i pm2 -g
npm i dva-cli -g
npm i eslint -g
npm i roadhog-api-doc -g
npm i boat-cli -g
npm i bit-bin -g
npm i rax-cli -g
npm i http-server -g
npm i browser-sync -g
npm i create-react-app -g
npm i egg-init -g
npm i dawn -g
npm i ghost-cli -g
npm i yo -g
npm i generator-keystone -g
npm i express-generator -g
npm i commitizen -g
npm i loadtest -g # 压力测试
npm i ant-design-pro-cli -g #
```

### npm常用命令
```bash
npm list -g --depth 1 # 查看已全局安装的包
npm config list -l # 查看配置
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```
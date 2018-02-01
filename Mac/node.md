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
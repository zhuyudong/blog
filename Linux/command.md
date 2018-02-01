## 目录结构
## 忘记密码
## 远程登录
## 文件基本属性
## 文件与目录管理
## 用户与用户组管理
## 磁盘管理
## vi/vim
## yum
```bash
# 替换yum源
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
# 下载源 http://mirrors.163.com/.help/CentOS6-Base-163.repo 放入/etc/yum.repos.d
# 中科大源 https://lug.ustc.edu.cn/wiki/mirrors/help/centos
# sohu源 http://mirrors.sohu.com/help/centos.html
yum clean all # 清除缓存
yum makecache # 生成缓存
```
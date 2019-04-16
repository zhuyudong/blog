```bash
curl -sSL https://get.docker.com/ | sh # 安装docker
curl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh -
curl -sSL https://get.daocloud.io/docker | sh

# https://docs.docker.com/compose/install/#install-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose # 安装docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version

# 如报如下警告 WARNING： net.bridge.bridge-nf-call-iptables is disabled
# WARNING： net.bridge.bridge-nf-call-ip6tables is disabled
# 添加内核参数以启用
sudo tee -a /etc/sysctl.conf <<-'EOF'
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
# 重新加载sysctl.conf
sudo sysctl -p

# 添加yum源
sudo tee /etc/yum.repos.d/docker.repo <<-EOF
[dockerrepo]
name=Docker Repository
baseurl=https://yum.dockerproject.org/repo/main/centos/7/
enabled=1
gpgcheck=1
gpgkey=https://yum.dockerproject.org/gpg
EOF

# 安装
sudo yum update
sudo yum install docker-engine

# 启动
sudo systemctl enable docker
sudo systemctl start docker

# 建立用户组
# 默认 docker命令使用 Unix socket 与 Docker 引擎通，而只有root用户和docker组用户才可以访问Docker引擎的 Unix socket
sudo groupadd docker
# Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.39/containers/json: dial unix /var/run/docker.sock: connect: permission denied
sudo usermod -aG docker $USER


# sudo groupadd docker 后配置加速器 /etc/systemd/system/muti-user.target.wants/docker.service
ExecStart=/usr/bin/dockerd --registry-mirror=https://btp2egey.mirror.aliyuncs.com

# 重新加载配置
sudo systemctl daemon-reload
sudo systemctl restart docker
```

```bash
# 卸载旧版
sudo yum remove docker  docker-common  docker-selinux  docker-engine
# 安装依赖
sudo yum install -y yum-utils   device-mapper-persistent-data   lvm2
# 添加源
sudo yum-config-manager     --add-repo     https://download.docker.com/linux/centos/docker-ce.repo
# 安装docker
sudo yum -y install docker-ce
# docker加速器
curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://4031ebb7.m.daocloud.io
# 启动
sudo systemctl start docker
# 安装依赖 Extra Packages for Enterprise Linux
sudo yum install epel-release
sudo yum  install -y python-pip
pip install --upgrade pip # 升级pip
pip -V # pip 8.1.2 from /usr/lib/python2.7/site-packages (python 2.7)
##### 安装 docker-compose
wget https://www.python.org/ftp/python/3.5.2/Python-3.5.2.tgz
sudo pip install -U docker-compose
pip install docker-compose -i https://pypi.tuna.tsinghua.edu.cn/simple # 临时用加速器加速
yum install git
# 测试
docker run hello-world
docker-compose --version
# 如果报Got permission denied while trying to connect to the Docker daemon，将docker组加入
sudo groupadd docker
# 将当前用户加入docker组
sudo gpasswd -a ${USER} docker
```
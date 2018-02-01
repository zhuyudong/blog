```bash
curl -sSL https://get.docker.com/ | sh
curl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh -
curl -sSL https://get.daocloud.io/docker | sh

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
sudo usermod -aG docker $USER


# sudo groupadd docker 后配置加速器 /etc/systemd/system/muti-user.target.wants/docker.service
ExecStart=/usr/bin/dockerd --registry-mirror=https://btp2egey.mirror.aliyuncs.com

# 重新加载配置
sudo systemctl daemon-reload
sudo systemctl restart docker
```
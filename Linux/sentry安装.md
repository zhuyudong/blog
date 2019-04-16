```bash
# 设置python源
mkdir .pip
cd .pip
touch pip.conf
vim pip.conf
# 加入如下豆瓣镜像（不要前面的#）
###
#[global]
#index-url = http://pypi.douban.com/simple
#[install]
#trusted-host = pypi.douban.com
###
# 或者使用临时镜像
pip install numpy -i http://pypi.douban.com/simple --trusted-host pypi.douban.com

# 下载python3.7.0
wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz
  # 或
curl -O https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz
# 如果在服务器上下载慢，先下载到自己电脑上，然后上传到服务器上用户目录下
scp ./Python-3.7.0.tgz yudong.zhu@10.10.108.18://home/yudong.zhu
# 安装python3
tar -zxvf Python-3.7.0.tgz
cd Python-3.7.0
./configure # ./configure --enable-optimizations
make && make install 

# zipimport.ZipImportError: can't decompress data; zlib not available，解决方案
sudo yum install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev
yum -y install zlib*
# ModuleNotFoundError: No module named '_ctypes' 解决办法
yum install libffi-devel -y
make install
  # 或
wget http://mirror.centos.org/centos/7/os/x86_64/Packages/libffi-devel-3.0.13-18.el7.x86_64.rpm
rpm -ivh libffi-devel-3.0.13-18.el7.x86_64.rpm

# 如果提示没有权限， 使用root用户安装 sudo su
# 检查python3是否安装成功
python3 -V
# 解压安装完成以后将安装包和解压包移到download目录下统一存放
mv Python-3.7.0.tgz /download

# 使用python3安装docker-compose
sudo pip install docker-compose
# 验证docker-compose是否安装成功
docker-compose --version

# 拉取sentry
git clone https://github.com/getsentry/onpremise.git
# 创建服务及数据目录
mkdir -p data/{sentry,postgres}
# 进入目录
cd onpremise
# 获取项目key
docker-compose run --rm web config generate-secret-key
# 将key复制到docker-compose.yml中 ##y_o90he!2%)i_cegwr!&ws#45!01rn3iam5jp(1q())wp!(c
vim docker-compose.yml
# 创建数据库和项目superuser，输入邮箱和密码
docker-compose run --rm web upgrade
# 开启sentry服务
docker-compose up -d
# 查看启动状态
docker ps

# 修改配置（不要前面的#）
docker-compose.yml
#SENTRY_EMAIL_HOST: 'mail.hobot.cc' # smtp
#SENTRY_EMAIL_PORT: 587
#SENTRY_EMAIL_USER: 'meetingroom@hobot.cc'
#SENTRY_EMAIL_PASSWORD: 'The_meeting123'
#SENTRY_EMAIL_USE_TLS: 'true'
# 重启服务
docker-compose up -d
```
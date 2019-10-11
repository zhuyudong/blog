#### 安装 jdk

```bash
# 1. centos yum
yum search java | grep jdk
yum install java-1.8.0-openjdk.x86_64

# 2. rpm下载安装
curl -O http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.rpm
rpm -ivh jdk-7u79-linux-x64.rpm

# 3. ubuntu
apt-cache search java | grep jdk
apt-get install openjdk-7-jdk

# 4. 源码安装
mkdir /usr/java
cd /usr/java
curl -O http://download.Oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz
tar -xzvf jdk-8u151-linux-x64.tar.gz

# 安装 maven
wget http://mirrors.shu.edu.cn/apache/maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz
tar -xzvf apache-maven-3.5.2-bin.tar.gz
sudo mv apache-maven-3.5.2 /usr/local
# vim ~/.zshrc
export M2_HOME=/Users/byronyy/Documents/zixiao217/jobsoftwares/apache-maven-3.5.0
export PATH=$PATH:$M2_HOME/bin


mvn -v 验证是否成功

# 安装 rocketmq http://www.iocoder.cn/RocketMQ/start/install/?vip&gitee
wget https://www.apache.org/dyn/closer.cgi?path=rocketmq/4.2.0/rocketmq-all-4.2.0-source-release.zip
unzip rocketmq-all-4.2.0-source-release.zip
cd rocketmq-all-4.2.0/
mvn -Prelease-all -DskipTests clean install -U
cd distribution/target/apache-rocketmq
# 启动 NameServer
nohup sh bin/mqnamesrv &
tail -f ~/logs/rocketmqlogs/namesrv.log
# 启动 Broker
nohup sh bin/mqbroker -n localhost:9876 &
tail -f ~/logs/rocketmqlogs/broker.log
# 发送消息
export NAMESRV_ADDR=localhost:9876
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
# 接收消息
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
# 关闭服务
sh bin/mqshutdown broker
sh bin/mqshutdown namesrv


# 使用 docker 安装 mysql

docker pull hub.c.163.com/library/mysql:5.7
docker tag hub.c.163.com/library/mysql:5.7 mysql:5.7
sudo mkdir /home/jk/mysql/datadir
sudo mkdir /jk/jk/mysql/conf.d
sudo chown jk:docker
docker run --name mysql5.7 -p 3306:3306 -v /home/jk/mysql/datadir:/var/lib/mysql -v /home/jk/mysql/conf.d:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7

# 最后配置环境变量

vim ~/.zshrc
source ~/.zshrc
java -version # 验证 java 是否安装  成功
mvn -v # 验证 maven 是否安装成功

```

.zshrc

```bash
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk.x86_64
export JRE_HOME=$JAVA_HOME/jre
export CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
export MAVEN_HOME=/usr/local/apache-maven-3.5.2
export PATH=$PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin:$JRE_HOME/bin
```

解决 objc[63766]: Class JavaLaunchHelper is implemented in both 问题

```bash
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_111.jdk/Contents/Home
CLASSPAHT=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
PATH=$JAVA_HOME/bin:$PATH:
export JAVA_HOME
export CLASSPATH
export PATH
```

#### 安装jdk
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

# 使用docker安装mysql
docker pull hub.c.163.com/library/mysql:5.7
docker tag hub.c.163.com/library/mysql:5.7 mysql:5.7
sudo mkdir /home/jk/mysql/datadir
sudo mkdir /jk/jk/mysql/conf.d
sudo chown jk:docker
docker run --name mysql5.7 -p 3306:3306 -v /home/jk/mysql/datadir:/var/lib/mysql -v /home/jk/mysql/conf.d:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7

# 最后配置环境变量
vim ~/.zshrc
source ~/.zshrc
java -version # 验证java是否安装成功
mvn -v # 验证maven是否安装成功
```
.zshrc
```bash
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk.x86_64
export JRE_HOME=$JAVA_HOME/jre
export CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
export MAVEN_HOME=/usr/local/apache-maven-3.5.2
export PATH=$PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin:$JRE_HOME/bin
```


```bash




```
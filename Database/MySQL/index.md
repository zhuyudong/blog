[下载](https://www.mysql.com/downloads/)
MySQL
MySQL-client
MySQL-devel
MySQL-shared
MySQL-bench
```bash
# 检车是否安装mysql
rpm -qa | grep mysql
# 卸载
rpm -e mysql
rpm -e --nodeps mysql
# 安装
yum install mysql
yum install mysql-server
yum install mysql-devl
# 通过docker安装
docker search mysql
docker pull mysql:5.6
docker run -p 3306:3306 --name jkom-mysql -v /home/jk/mysql/mysql.cnf:/etc/mysql/my.cnf -v /home/jk/mysql/logs:/logs -v /home/jk/mysql/data:/mysql_data -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
docker exec -it jkom-mysql bash
mysql -h localhost -u root -p 123456

# 启动
service mysqld start
# 关闭
/usr/bin/mysqladmin -u root -p shutdown
# centos7启动
yum install mariadb-server mariadb
systemctl start mariadb
systemctl stop mariadb
systemctl restart mariadb
systemctl enable mariadb # 设置开机启动
# 检查mysql
mysqladmin --version
ps -ef | grep mysqld
mysql
# 创建root密码
mysqladmin -u root password "new_password" 
mysql -u root -p
# 默认配置文件
/etc/my.cnf

# 命令
use RUNOOB;
SHOW DATABASES;
SHOW TABLES;
SHOW COLUMNS FROM 数据表;
SHOW INDEX FROM 数据表;
SHOW TABLE STATUS FROM 数据表;
SHOW TABLE STATUS FROM 数据表 LIKE 'runoob%';
SHOW TABLE STATUS FROM 数据表 LIKE 'runoob%'\G; # 查询结果按列打印

```

支持5000万条数据
32位系统表文件最大可支持4GB，64位系统最大可支持8TB
采用GPL协议，可以修改源码

创建
删除
选择
数据类型
创建数据表
删除数据表
插入数据
查询数据
WHERE
UPDATE
DELETE
LIKE
UNION
排序
分组
连接的使用
NULL值处理
正则表达式
事务
ALTER
索引
临时表
复制表
元数据
序列使用
处理重复数据
SQL注入
导出数据
导入数据

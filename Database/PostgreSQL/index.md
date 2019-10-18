```bash
docker search postgre
docker pull postgres
docker images
# 自动生成默认用户名 postgres
docker run -d --name postgresql -p 5432:5432 -e POSTGRESQL_ADMIN_PASSWORD=Aa123456 -v $PWD/db/postgresql:/data/db postgres


# mac上安装
brew install postgresql
# 帮助
psql --help
# 连接，输入密码Aa123456
psql -h 10.10.108.18 -p 5432 -U postgres -W
# 连接 postgres 数据库
psql -h 10.10.108.18 -p 5432 -d postgres -U postgres -W

# 以;作为语句结束符
# 用户列表
\du
# 创建用户user1
create user user1 with password 'Aa123456';
# 删除用户
drop user user1
# 查看数据库列表
\l
# 创建数据库
create database db1; # 如果已存在报 ERROR:  database "db1" already exists
# 删除数据库
drop database db1; # 如果不存在报 ERROR:  database "db3" does not exist

# 选择表
\c databasename
create table people;
drop table people;
# 查看数据库列表
\d
# 查看版本
select version();
select current_date;
select 2 + 2;
# 帮助
\h
\password
# 命令解释
\? 
# 所有表格
\d
# 打开文本编辑器
\e 
# 当前连接信息
\conninfo
# 退出psql
\q

```

```sql
# 大小写均可
CREATE TABLE user_tb1(name VARCHAR(20), signup_date DATE);
INSERT INTO user_tb1(name, signup_date) VALUES('一一', '2019-01-28');
SELECT * FROM user_tb1;
UPDATE user_tb1 SET name = '二二' where name = '一一';
DELETE from user_tb1 WHERE name = '二二';
ALTER TABLE user_tb1 ADD email VACHAR(40);
# 添加列
ALTER TABLE user_tb1 ADD email VARCHAR(40);
ALTER TABLE user_tb1 ALTER COLUMN signup_date SET NOT NULL;
# 设置默认值
ALTER TABLE user_tb1 ALTER COLUMN email set DEFAULT 'yudong.zhu@horizon.ai';
# 去除默认值
ALTER TABLE user_tb1 ALTER email DROP DEFAULT;
# 重命名字段
ALTER TABLE user_tb1 RENAME COLUMN signup_date TO signup;
# 删除字段
ALTER TABLE user_tb1 DROP COLUMN email;
# 重命名表
ALTER TABLE user_tb1 RENAME TO backup_tb1;
drop TABLE IF EXISTS backup_tbl;
drop database IF EXISTS hello;
```
```sql
# SELECT
select column_name, column_name from table_name;
select * from table_name;
select distinct column_name, column_name from table_name;
# WHERE = <> > < >= <= between like in 
select column_name, column_name from table_name where column_name oprator value;
select * from Websites where country='CN';
# AND & OR
select * from websites where country='cn' and alexa > 50;
select * from websites where country='cn' or country='usa';
select * from websites where alexa > 15 and (country='cn' or country='usa');
# ORDER BY
select column_name, column_name from table_name order by column_name, column_name asc|desc
# INSERT INTO
insert into table_name values (value1, value2, value3...);
insert into table_name (column1, column2, column3...) values (value1, value2, value3...)
# UPDATE
update table_name set column1=value1, column2=value2... where some_column=some_value;

# DELETE
delete from table_name where some_column=some_value

# select top
# mysql
select column_name(s) from table_name limit number;
# sqlserver
select top 50 percent * from table_name;

 # not like
 select * from table_name where name NOT LIKE '%oo%';

# 通配符 % _ [charlist] [^charlist] [!charlist]
select * from websites where name like '_google'; # google前任意一个字符开头
select * from websites where name like 'G_o_le';
select * from websites where name REGEXP '^[GFs]'; # 以G或F或s开头
select * from websites where name REGEXP '^[A-F]';
select * from websites where name REGEXP '^[^A-F]'; # 不以A-F开头

# IN
select column_name from table_name where column_name IN (value1, value2, value3,...)
# BETWEEN、NOT BETWEEN 左右闭合
select column_name from table_name where column_name between value1 and value2;
select * from websites where (alexa BETWEEN 1 and 20) AND NOT country in ('usa', 'ind');
# alias
select column_name as alias_name, other_name from table_name;
select column_name from table_name as alias_name;
select name, CONCAT(url, ', ', alexa, ', ', country) as site_info from websites;
select w.name, w.url, a.count, a.date from websites as w, access_log as a where a.site_id=w.id and w.name="菜鸟教程";

# join
select websites.id, websites.name, access_log.count, access_log.date from websites INSERT JOIN access_log ON websites.id=access_log.site_id;
select column_name from table1 LEFT JOIN table2 on table1.column_name=table2.column_name;
select column_name from table1 LEFT OUTER JOIN table2 on table1.column_name=table2.column_name;
select column_name from table1 RIGHT JOIN table2 on table1.column_name=table2.column_name;
select column_name from table1 RIGHT OUTER JOIN table2 on table1.column_name=table2.column_name;

# create
create database name;
create table table_name (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT, # SQLServer中 id int IDENTITY(1, 1) PRIMARY KEY
  column_name1 varchar(255),
  column_name1 data_type(size),
  column_name1 data_type(size),
  PRIMARY KEY (id)
);

# views
drop view view_name;
```
联合
INSERT JOIN 如果表中有至少一个匹配，则返回行
LEFT JOIN 即使右表中没有匹配，也从左表返回所有的行
RIGHT JOIN 即使左表中没有匹配，也从右表中返回所有的行
FULL JOIN 只要其中一个表中存在匹配，则返回行
约束
NOT NULL
UNIQUE
PRIMARY KEY
FOREIGN KEY
CHECK 保证列中的值符合指定条件
DEFAULT 规定没有给列赋值时的默认值
```sql
函数
# AVG()

# COUNT()
# FIRST() 只有 MS Access 支持，相当于sqlserver中的 select top
# LAST() 只有 MS Access 支持，相当于 order by id limit 1
# MAX()
# MIN()
# SUM()
# UCASE() sqlserver中是upper(column_name)
# LCASE() sqlserver中是lower(column_name)
# MID() 从某个文本中提取字符，MySQL中使用
# SubString(字段, 1, end)
# LEN() mysql中是length()
# ROUND(column_name, decimals) 四舍五入
# NOW()
# FORMAT() 
select name, url, DATE_FORMAT(Now(), '%Y-%m-%d') AS date from websites;
```

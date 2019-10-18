[mongoose 学习笔记（超详细）](https://segmentfault.com/a/1190000010688972)  
[mongoose api](http://www.nodeclass.com/api/mongoose.html)

```bash
docker search mongo
docker pull mongo
docker images mongo
# 运行容器，使用镜像mongo，容器名mongodb，宿主数据路径 ~/db/mongodb ，如不存在自动创建
docker run -d --name mongodb -p 27017:27017 -v $PWD/db/mongodb:/data/db mongo
docker ps
# 进入容器内部mongo命令行
docker run -it mongo mongo --host 127.0.0.1
exit
# 进入 mongodb 容器shell
docker exec -it a4db96e29447 bash
# 退出shell
exit
# 查看容器日志
docker logs a4db96e29447
```

### 数据类型

- Double 1
- String 2
- Object 3
- Array 4
- Binary data 5
- Undefined 6 - deprecated
- Object id 7
- Boolean 8
- Date 9
- Null 10
- Regular Expression 11
- JavaScript 13
- Symbol 14
- JavaScript（with scope）15
- 32-bit integer 16
- Timestamp 17
- 64-bit integer 18
- Min key 255
- Max key 127

### 操作符

- `$or`
- `$gt`
- `$gte`
- `$lt`
- `$lte`
- `$ne`

### 插入、删除

```js
// 清空集合
db.col.remove({})
db.col.insert({})
```

### 查询

```js
db.collection.find(query, projection)
db.col.find().pretty()
db.col.find({ by: "" }).pretty()
db.col.find({ likes: { $lt: 50 } }).pretty()
db.col.find({ likes: { $lte: 50 } }).pretty()
db.col.find({ likes: { $gt: 50 } }).pretty()
db.col.find({ likes: { $gte: 50 } }).pretty()
db.col.find({ likes: { $ne: 50 } }).pretty()
db.col.find({title: /^模糊查找$/})
// 查询 title 为 String 的数据
db.col.find({title: {$type: 2}})
// 等于
db.col.find({title: {$type: 'String'}})
// 返回结果不包括 _id 字段
db.col.find({}, {title: 1, _id: 0}).limit(2)
// 只显示第二条数据
db.col.find({}, {title: 1, _id: 0}).limit(1).skip(1)
// 升序
db.col.find({}, {title: 1, _id: 0}).sort({likes: -1})
// 降序
db.col.find({}, {title: 1, _id: 0}).sort({likes: -1})

db.col.find({$or: [{key1: 'value1'}, {key2: 'value2'}]})
db.col.find({likes: {$gt: 50}, $or: [{"by": "菜鸟教程"},{"title": "MongoDB 教程"}]}
```

### 索引

```js
db.collection.createIndex(keys, {
  background: Boolean, // 是否阻塞其他操作 默认 false
  unique: Boolean, // 是否唯一索引，默认 false
  name: String, // 索引名，如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称
  sparse: Boolean,
  expireAfterSeconds: Integer, // 集合的生存时间（s）
  v: index version,
  weights: document, // 权重， 1 ～ 99999
  default_language: String,
  language_override: String
})
db.col.createIndex({title: 1, description: -1})
db.col.getIndexes()
db.col.totalIndexSize()
db.col.dropIndexes()
db.col.dropIndex('索引名称')
```

### 聚合

- `$sum`
- `$avg`
- `$min`
- `$max`
- `$push`
- `$addToSet`
- `$first`
- `$last`

```js
/*
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'runoob.com',
   url: 'http://www.runoob.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   _id: ObjectId(7df78ad8902d)
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'runoob.com',
   url: 'http://www.runoob.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},
{
   _id: ObjectId(7df78ad8902e)
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
}
*/
// 计算每个作者的文章数
db.col.aggregate([{ $group: { _id: "$by_user", num_total: { $num: 1 } } }])
```

### 管道，流式执行

- `$project`
- `$match`
- `$limit`
- `$skip`
- `$unwind`
- `$group`
- `$sort`
- `geoNear`

```js
db.articles.aggregate([
  {
    $project: {
      _id: 0,
      title: 1,
      author: 1
    }
  }
])
db.articles.aggregate([
  { $match: { score: { $gt: 70, $lte: 90 } } },
  { $group: { _id: null, count: { $sum: 1 } } }
])
```

### 复制（副本集）

副本集特征

- N 个节点的集群
- 任何节点可作为主节点
- 所有写入操作都在主节点上
- 自动故障转移
- 自动恢复

智能通过主节点将 Mongo 服务添加到副本集中

```bash
# 启动名为rs0的实例
mongod --port 27017 --dbpath '/home/db/mongodb' --replSet rs0
# 客户端启动一个新的副本集
rs.initiate()
# 查看副本集配置
rs.conf()
# 查看副本集状态
rs.status()
# 将某 mongodb 服务加入到副本集中
rs.add("mongod1.net:27017")
# 判断当前节点是否为主节点
db.isMaster()
```

### 分片

- 复制所有的写入操作到主节点
- 延迟的敏感数据会在主节点查询
- 单个副本集限制在 12 个节点
- 当请求量巨大时会出现内存不足
- 本地磁盘不足
- 垂直扩展价格昂贵

```bash
# 1. 启动Shared Server
mkdir -p /www/mongoDB/shared/s0
mkdir -p /www/mongoDB/shared/s1
mkdir -p /www/mongoDB/shared/s2
mkdir -p /www/mongoDB/shared/s3
/usr/local/mongoDB/bin/mongod --port 27020 --dbpath=/www/mongoDB/shared/s0 --logpth /www/mongoDB/shard/log/s3.log --logappend --fork
/usr/local/mongoDB/bin/mongod --port 27021 --dbpath=/www/mongoDB/shared/s0 --logpth /www/mongoDB/shard/log/s3.log --logappend --fork
/usr/local/mongoDB/bin/mongod --port 27022 --dbpath=/www/mongoDB/shared/s0 --logpth /www/mongoDB/shard/log/s3.log --logappend --fork
/usr/local/mongoDB/bin/mongod --port 27023 --dbpath=/www/mongoDB/shared/s0 --logpth /www/mongoDB/shard/log/s3.log --logappend --fork
# 2. 启动 config server
mkdir -p /www/mongoDB/shard/config
/usr/local/mongoDB/bin/mongod --port 27100 --dbpath=/www/mongoDB/shard/config --logpath=/www/mongoDB/shard/log/config.log --logappend --fork
# 3. 启动 Route Process（作为统一入口），连接 config server，chunk 默认 200M
/usr/local/mongoDB/bin/mongos --port 40000 --configdb localhost:27100 --fork --logpath /www/mongoDB/shard/log/route.log --chunkSize 500
# 4. 配置 sharding
/usr/local/mongoDB/bin/mongo admin --port 40000
db.rumCommand({addShard: "localhost:27020"})
db.rumCommand({addShard: "localhost:27021"})
db.rumCommand({addShard: "localhost:27022"})
db.rumCommand({addShard: "localhost:27023"})
```

### 备份与恢复

```bash
mongodump --host "127.0.0.1" --port 27017 --db "yapi" --out "/home/yudong.zhu/dump"
mongodump -h "127.0.0.1:27017" -d "yapi" -o "/home/yudong.zhu/dump"
# 自动备份本地27017上服务到 bin/mongodb 上
mongodump
# 恢复，--drop 恢复的时候先删除当前数据 --dir 指定备份的目录，不能同时用 path 和 --dir， path 表示备份数据所在目录
mongorestore --host "127.0.0.1" --port 27017 --db "yapi" <path>
```

### 引用

- 手动引用（Manual References）
- DBRefs
  - `$ref`
  - `$id`
  - `$db`

覆盖查询

- 所有的查询字段是索引的一部分
- 所有的查询返回字段在同一个索引中

所有索引字段是一个子文档

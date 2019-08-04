/**
 * 引用式关系
 * {
   "_id":ObjectId("52ffc33cd85242f436000001"),
   "contact": "987654321",
   "dob": "01-01-1991",
   "name": "Tom Benzamin",
   "address_ids": [
      ObjectId("52ffc4a5d85242602e000000"),
      ObjectId("52ffc4a5d85242602e000001")
   ]
  }
 */
const result = db.users.findOne({ name: "name" }, { address: 1 })
const address = db.address.find({ _id: { $in: result.address_ids } })

/**
 * 引用 runoob 数据库下 address_name 集合，id为 534009e4d852427820000002
 *{
   "_id":ObjectId("53402597d852426020000002"),
   "address": {
   "$ref": "address_home",
   "$id": ObjectId("534009e4d852427820000002"),
   "$db": "runoob"},
   "contact": "987654321",
   "dob": "01-01-1991",
   "name": "Tom Benzamin"
  }
 */
const user = db.users.findOne({ name: "name" })
const dbRef = user.address
dbRef[dbRef.$ref].findOne({ _id: dbRef.$id })

/**
 * 使用覆盖索引查询
 * {
   "_id": ObjectId("53402597d852426020000002"),
   "contact": "987654321",
   "dob": "01-01-1991",
   "gender": "M",
   "name": "Tom Benzamin",
   "user_name": "tombenzamin"
  }
 */
// 建立联合索引
db.users.ensureIndex({ gender: 1, user_name: 1 })
// 上述索引会覆盖下述查询，不从数据库文件中查询，从索引中查找，因为索引不包括_id
db.users.find({ gender: "M" }, { user_name: 1, _id: 0 })
// 这个查询不会被覆盖
db.users.find({ gender: "M" }, { user_name: 1 })

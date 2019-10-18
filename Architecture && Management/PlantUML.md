元素类型（package/node/folder/frame/cloud/database）、
颜色、
连接、
箭头（填充）、
注释（note
left:、note left of、note right:、note right of、note top:、note top of、note bottom:、note bottom of）、
包装、
属性&方法（private/protected/public）、
范型、
显示/隐藏、
非字母字符、
别名、
component componentName 或[componentName]/abstract/interface 或()/annotation/enum、
模板（<<>>）
html 标签、
换行（\n）、
方向（-> 表示横向、--> 表示纵项、-left->、-right->、-up->、-down->）、
自动编号

```
<b> 加粗
<u> 下划线
<i> 倾斜
<s> 删除
<del>
<strike>
<font color="#AAAAAA">
<font color="red">
<color:#AAAAAA>
<color:red>
<size:16>
<img src="file">
<img:file>
```

### 声明元素

```plantuml
@startuml
actor actor
agent agent
artifact artifact
boundary boundary
card card
cloud cloud
component component
control control
database database
entity entity
file file
folder folder
frame frame
interface interface
node node
package package
queue queue
stack stack
rectangle rectangle
storage storage
usecase usecase
@enduml
```

```plantuml
@startuml
folder folder [
  文件夹1 <b>文件夹1
  ----
  文件夹2 文件夹2
  ====
  文件夹3 文件夹3
  ....
]
@startuml
```

### 链接

```plantuml
@startuml
node node
node node1
node node2
node node3
node node4
node -- node1
node == node2
node .. node3
node ~~ node4
@startuml
```

```plantuml
@startuml
left to right direction
frame user {
  card root
  card sub1
  card sub2
}
card leaf1
card leaf2
root --> sub1
root --> sub2
sub1 --> leaf1
sub1 --> leaf2
@startuml
```

```plantuml
cloud cloud1
cloud cloud2
cloud cloud3
cloud cloud4
cloud cloud5
cloud1 -0- cloud2
cloud1 -0)- cloud3
cloud1 -(0- cloud4
cloud1 -(0)- cloud5
```

### 包装

全局名唯一，区分大小写

```plantuml
@startuml
artifact Artifact {
  folder folder1
}
storage Storage1 {
  folder folder2
}
folder Folder {
  database database1
}
node Node {
  cloud cloud1
}
cloud Cloud {
  frame frame1
}
database Database {
  storage storage1
}
storage Storage2 {
  storage storage3
}
@enduml
```

### 圆角

```plantuml
@startuml
skinparam rectangle {
  roundCornor<<Concept>> 25
}
rectangle "Concept Model" <<Concept>> {
  rectangle "Example 1" <<Concept>> as ex1
  rectangle "Another reactangle"
}
@enduml
```

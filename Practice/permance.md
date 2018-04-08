tree-shaking
作用域提升 scope hoisting
代码分割 code splitting
交叉观察器 intersection observer
clients hints 自动响应式图片
css containment
service workers

性能必须被测量、监测和完善


## 性能优化清单
### 计划和度量
### 制定目标
### 定义环境
### 构建优化
### 静态资源优化
### 交付优化
  使用defer属性（IE9及以下不支持 async）
  限制第三方库和脚本的影响
  可以使用静态社交分享按钮（如通过SSBG）和静态链接来代替交互式地图
### 协议优化
  使用serice worker中缓存静态资源并存储离线资源（甚至离线页面）
  正确设置 strict-transport-security 和 content-security-policy 请求头
### 测试监控
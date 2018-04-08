生命周期：
componentWillReceiveProps——>shouldComponentUpdate——>compoentWillUpdate——>render——>componentDidUpdate

ReactDOM的API：
- ReactDOM.findDOMNode(this) 在componentDidUpdate或componentDidMount中使用获取当前组件实例
- unmountComponentAtNode(this.node)
- ReactDOM.render(ReactElement element, DOMElement container, [Function callback])

Virsual DOM 实现了一个SyntheticEvent（合成事件层），访问原生事件对象用nativeEvent属性
JSX中事件属性名必须使用驼峰，而原生用全部小写
```html
<button onclick="handleClick()">Test<button/>
<button onClick={this.handleClick()}>Test<button/>
```
React对事件做了处理,React的合成事件没有实现事件捕获，仅支持冒泡，React中e.prventDefault() 兼容了原生的e.preventDefault()和IE的e.cancelBubble=true，react合成事件系统中兼容了IE下只能window.e获取事件对象的问题
- 事件委派
- 自动绑定this为当前组件

表单
每当表单状态变化时写入state中，称为受控组件(controlled component)，组件渲染出的状态与它的value或checked prop对应，react通过这种方式消除了组件的局部状态
react受控组件更新state流程（双向绑定）：
1. 可以在初始state中设置表单的默认值
2. 每当表单的值发生变化，调用onChange事件处理器
3. 事件处理器通过合成事件对象e拿到改变后的状态，并更新应用的state
4. setState触发视图的重新渲染
意味着在执行最后一个setState前对表单值进行清洗和校验
```js
// e 是合成事件对象
handleChange(e) {
  this.setState({
    value: e.target.value.substring('0', 140).toUpperCase();
  })
}
```
如果表单组件没有value和checked属性就是非受控组件，可以用defaultValue和defaultChecked prop来表示组件的默认状态
非受控组件的状态不会受应用状态的控制，应用中也多了局部组件状态，而受控组件的值来自组件的state
表单组件属性：
  状态属性：
    value 类型为text的input组件、textarea组件以及select组件
    checked 类型为radio或checkbox的组件
    selected 可作用于select组件下的option上，推荐在select组件上使用value
  事件属性

CSS模块化问题：
- 全局污染
- 命名混乱
- 依赖管理不彻底
- 无法共享变量
- 代码压缩不彻底

解决方案：
- Line Style
- CSS Modules 
```
css?modules&localIdentName=[name]_[local]-[hash:base64:5]
```


diff算法策略
1. DOM节点跨层级的移动操作特别少，可以忽略 tree diff
2. 拥有相同类的两个组件会生成相似的结构 component diff
3. 对于同一层级的一组子节点，可以通过唯一id区分 element diff 插入 删除 移动

官方建议不进行DOM节点跨层级操作

redux-undo
高阶reducer
- 能够处理额外的action
- 能够维护更多的state
- 将不能处理的action委托给原始reducer处理

redux-form-utils 利用高阶组件的特性为表单的每个字段提供value和onChange等必须值
  - createForm(config) 自动为被装饰的组件添加表单相关的props
  - bindRedux(config) 生成redux应用相关的reducer、initialState、actionCreator
redux-form 提供表单同步验证、异步验证、嵌套表单等复杂功能


redux-saga redux-gen redux-loop redux-effects redux-side-effects redux-thunks rx-redux redux-rx
jest-enzyme: 快速的命令行接口、Mock工具集、自动化模块Mock系统
npm问题：安装时无法保证速度和一致性、安全问题，因为NPM安装时允许运行代码
webpack：高性能的构建缓存、提升初始化速度和增量构建效率、更好的支持TypeScript、修订长期缓存、支持WASM模块支持、提升用户体验
let const 解决变量作用域泄露的问题
class extends super 让对象原型的写法更加清晰、更像面向对象编程的语法、更加通俗易懂
node：日志管理、性能监控、服务监控、异常监控
前端工程化：开发需求、共享需求、性能需求、部署需求
共享需求：基础代码共享、通用工具方法共享、基础交互组件共享、业务组件共享



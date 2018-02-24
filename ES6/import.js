/**
 * import 会被JS引擎分析，限于模块内其它模块先执行
 * import 和 export 只能放在顶层
 * import() 返回 Promise 对象，异步加载
 */
// 1. 按需加载
button.addEventListener('click', event => {
  import('./dialogBox.js')
    .then(dialogBox => {
      dialogBox.open();
    })
    .catch(error => {
      
    })
});

// 2. 条件加载
if (condition) {
  import('moduleA').then();
} else {
  import('moduleB').then();
}

// 3. 动态模块路径
import(f()).then();

// 对象解构赋值
import('module.js').then(({export1, export2}) => {})
// 模块有 default 输出接口
import('module.js').then(module => {
  console.log(module.default)
});
import('module.js').then(({default: thenDefault}) => {});
// 批量加载
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js')
]).then(([module1, module2, module3]) => {

})
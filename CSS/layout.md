表格布局
定位布局
浮动布局
多列布局
弹性（Flexbox）布局
网格（Grid）布局
不规则（Shapes）布局

按功能分：
静态布局 Static Layout
流式布局 Liquid Layout
自适应布局 Adaptive Layout
响应式布局（Responsive Layout）

表格是用来显示数据的，不是专门用来布局的，web被非可视化设备渲染时会出问题，在大型设备上会强迫用户滚动
- 代码臃肿
- 页面渲染性能问题
- 不利于搜索引擎优化
- 可访问性差
- 不够语义

移动端底部工具栏等分列的布局可以用table
.css {
  display: table;
  display: table-cell;
  width: 100%;
  table-layout: fixed;
}

模态弹出框和固定页头页脚常见是定位布局，PSD2HTML转出的一般也是定位布局
《网站重构》

浮动布局经典的圣杯和双飞翼都是两边固定中间自适应的三栏布局
静态布局就是固定宽度
流式布局就是百分比布局，但是在过大或过小屏幕上，相对原始设计稿会显示不正常

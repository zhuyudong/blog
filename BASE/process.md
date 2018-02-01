[从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)
浏览器多进程
浏览器内核多线程
JS单线程
JS运行机制

每个tab页是一个独立的浏览器进程（不绝对，如多个空白页合并成一个进程），并且有浏览器主进程
浏览器进程：
- Browser主进程（负责协调、主控）
  - 负责浏览器界面显示、与用户交互，如前进、后退等
  - 负责各个页面的管理，创建和销毁其他进程
  - 将Renderer进程得到的内存中的Bitmap绘制到界面上
  - 网络资源的管理和下载
- 第三方插件进程（仅使用时才创建）
- GPU进程，最多一个，用于3D绘制等
- 浏览器渲染进程（浏览器内核）（Render进程，内部是多线程的）
  - 页面渲染、脚本执行、事件处理

多进程优势
- 避免单个page crash影响整个浏览器
- 避免第三方插件crash影响整个浏览器
- 多进程充分利用多核优势
- 方便使用沙盒模型隔离插件等进程，提高浏览器稳定性

浏览器渲染进程是多线程的
- GUI渲染线程
  - 负责渲染浏览器界面，解析HTML、CSS、构建DOM树和RenderObject树，布局和绘制等
  - 当界面需要重绘（Repaint）或由于操作引发回流（Reflow）时，该线程就会执行
  - GUI渲染线程和JS引擎线程互斥
- JS引擎线程
  - 即JS内核，负责处理JavaScript脚本
  - 任何时候只有一个JS线程运行
  - 如执行时间过程会导致GUI阻塞
- 事件触发线程
  - 归属于浏览器而不是JS引擎
  - 将事件任务放入队列中
  - 等待JS引擎触发事件
- 定时触发器线程
  - 包括 setInterval 与 setTimeout
  - 浏览器计数器不是有JS引擎计数的(单独线程计时)
  - setTimeout执行间隔至少4ms
- 异步http请求线程


渲染流程
1. 解析html建立dom树
2. 解析css并结合dom构建render树
3. 布局render树（Layout/reflow）,负责各元素尺寸、位置的计算
4. 绘制render树（paint），绘制页面像素信息
5. 浏览器将各层的信息发给GPU，GPU负责将各层composite

DOMContentLoaded事件先执行，即仅DOM加载完成，不包括样式表、图片
onload事件触发时，页面上所有的DOM、样式表、脚本、图片都已经加载完成
CSS加载不会阻塞DOM树解析，但会阻塞render树渲染

iOS的webview或Safari在滚动时不执行JS，浏览器最小化后也不执行setInterval，所以用setTimeout模拟setInterval，或用requestAnimationFrame

macrotask或task： setTimeout、setInterval task—>重新渲染——>task，放在事件队列中，由事件触发线程维护
microtask或jobs： Promise、process.nextTick 当前task执行结束后立即执行的任务，即下一个task之前，在渲染之前，放在微任务队列中（Job Queues）中，由JS引擎线程维护



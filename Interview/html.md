清除浮动：

- 父级定义 height
- 父级设置 oerflow: hidden
- 结尾处加空 div clear:both
- 父级定义增加伪元素 ::after

```css
.clearFix:after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
}
```

sprites

- background-image
- background-repeat
- background-position

拖拽事件：
dragstart、
dragmove、
dragend、
drag、
drop 释放的时候、
dragenter 进入目标元素时出发，如高亮
dragover 拖拽时在目标元素上移动触发
dragleave 拖拽时移出目标元素触发

cookiestorage 在有效期内浏览器关闭也在，自动传，sessionstorage 不自动传

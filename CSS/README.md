[PostCSS README.md](https://github.com/postcss/postcss/blob/master/README.cn.md)  
[PostCSS Plugins](https://github.com/postcss/postcss/blob/master/docs/plugins.md)  
[PostCSS Plugins search 目录](https://www.postcss.parts/)

IE 盒模型包括 padding 和 border  
inline-block 有空白字符压缩的问题

CSS 权重

1. 行内样式
2. id
3. 类与属性
4. 元素

伪元素选择器

- ::after
- ::before
- ::first-letter
- ::first-line
- ::selecton

float 设计初衷是为了实现文字环绕效果

fles 解决了垂直居中的问题
display: flex
行方向
flex-direction: row | row-reverse | column | column-reverse
行布局
flext-wrap: nowarp | wrap | wrap-reverse
水平空间分布
justify-content: flex-start | flext-end | center | space-around | space-between | space-evenly
垂直空间分布
alignn-items: flex-start | flext-end | center | stretch | baseline
多行布局
align-content: flex-start | flex-end | center | stretch | space-between | space-around

[Web 自适应布局你需要知道的所有事儿](https://juejin.im/post/5a22d0086fb9a0451a7631ee)
[你应该知道的一些事--css 权重](https://www.w3cplus.com/css/css-specificity-things-you-should-know.html)

单位英寸像素数（Pixel Per Inch， PPI）：现实世界的一英寸内像素数，决定了屏幕的显示质量
设备像素比（Device Pixel Ratio，DPR）：物理像素与逻辑像素（px）的对应关系
分辨率：（Resolution）：屏幕区域的宽高所占像素数
分辨率适配可用 vw 单位解决
DPR 适配用 viewport
PPI 主要影响文字，用 media 规则来适配

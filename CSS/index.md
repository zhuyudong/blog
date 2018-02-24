## CSS(Cascading Style Sheet)  

分隔符;可以不带
选择器：分类、权重、解析方式、性能
a{}
伪元素 ::before{} :after{}   真实存在的元素,IE下是单:
.link{}
#id{}
[type=radio]{}
伪类 :hover{}  表示一个元素的状态
组合 [type=checkbox] + label{}
否定 :not(.link){}
通用*{}

权重：计算一个不进位的数字（id选择器就是比类选择器大，再多类选择器都搞不过id选择器），id选择器搞不过内联样式
#id{} +100
.class [type=value] :hover  +10
element{} ::before{}   +1
其它选择器 +0
!important 优先级最高，比内联样式优先级都高
元素属性优先级高
相同权重 后写的生效

非布局样式：
字体：字体、字重、颜色、大小、行高，字体族：serif scans-serif monospace 等宽字体 cursive 手写体（方正、静蕾） fantasy 花体  ，字体族不需要加引号
    多字体fallback（针对每一个字符）、网络字体、自定义字体、iconfont
    mac上 "PingFang SC" 字体更好看
行高：line-height 不同但实际高度相同，大的会撑起inlone-box（父整行）的高度，可以做到垂直居中，按基线对齐
背景：颜色、渐变色背景、多背景叠加、背景图片和属性（雪碧图）、base64和性能优化、多分辨率适配
边框
滚动
文本折行

### CSS预处理器
变量和计算（减少重复代码），可以跨文件使用
嵌套（反映层级和选择器约束）
Extend 和 Mixin 代码片段（复用）
循环（适用于复杂有规律的样式）
import CSS文件模块化（性能好）

css的@import 会导致多个请求，也不会合并，性能不是很好

预处理器框架：
- SASS -Compass compass-style.org
- Less -Lesshat/EST http://ecomfe.github.io/
- 提供现成的mixin
- 类似JS类库 封装常用功能

面试：
作用：更好的组织CSS代码、提高代码复用性、提升可维护性、语法检查、兼容性处理、import模块合并、压缩文件
能力：
如何解决css模块化问题：使用预处理器、使用webpack、

#### less
js写成、可以直接使用、特性较sass更繁琐
```bash
npm i less -g
lessc demo.less > demo.css
npm i node-sass -g
node-sass demo.scss
node-sass --output-style expanded demo.scss > demo.css # 展平嵌套
```
#### sass/scss
ruby写成，也有node版本
sass变量和less变量差异：less用@、sass用$

基本规则 `reset.css` `normalize.css`  
布局规则：主题 Theme => 页面 Page => 布局 Layout => 模块 Module => 元素 Element
如果规则具有状态或时间特征则提炼出来


### CSS工程化
组织、优化、构建、维护
#### PostCSS
从css到css
模块化、加前缀、兼容性
本身只有解析的能力
:root{} 在cssnext中表示变量
插件：import模块合并、autoprefixer自动添加前缀、cssnano压缩代码、cssnext使用css新特性、precss（变量、mixin、循环）
```bash
npm i postcss-cli -g
postcss src.css -o dest.cdd
```
postcss.config.js
```js
const precss = require('precss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
module.exports = {
  plugins: [
    precss,
    cssnext,
    atImport,
    autoprefixer({
      browsers: [
        '> 10%',
        'Firefox > 30',
        'last 2 version'
      ]
    }),
    cssnano
  ]
}
```

```css
/* 以下好的实践是：
     1. 将reset提炼出来
     2. 将li 换成 .layout-grid-item 以更符合语义化特征
*/
.layout-grid {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.layout-grid > li {
  display: inline-block;
  margin: 0 0 10px 10px;
}
```

grunt-postcss
rollup-postcss
gulp-postcss
```js
const gulp = require('gulp');
gulp.task('postcss', function(){
  var postcss = require('gulp-postcss');
  return gulp.src('demo.css')
    .pipe(postcss([
      precss,
      cssnext,
      atImport,
      autoprefixer({
        browsers: [
          '> 10%',
          'Firefox > 30',
          'last 2 version'
        ]
      }),
      cssnano
    ]))
    .pipe(gulp.dest('build/'));
});
```

webpack demo.js build/


`browser-sync start --server --files="**/"`

inline-block布局像文本一样排block元素，没有清除浮动的问题，但是需要处理间隙（字符或元素间隙造成的）、适合定宽的场合
响应式设计和布局：隐藏+折行+自适应空间、rem/viewport/media query,
rem利用html字体

主流布局方案：
qq.com   浮动布局、定宽、使用::after{clear:both} 清除浮动
163.com 浮动布局、定宽、使用::after{clear:both} 清除浮动
baidu.com 浮动布局、定宽、使用<div style="clear:both;height:0"></div>来清除浮动，为了兼容更低端浏览器
taobao.com 浮动布局、定宽、使用::after{clear:both} 清除浮动
apple.com 使用flex布局方式

1. 如何使用div画XXX box-shadow
2. 如何产生不占空间的边框 box-shadow outline
3. 如何实现圆形元素 `border-radius:50%`
4. 如何实现iOS图标的圆角 clip-path: (svg)
5. 如何实现半圆、扇形等图形 border-radius组合：有无边框、边框粗细、圆角半径
6. 如何实现背景图居中显示/不重复/改变大小 background-position background-repeat background-size(cover/contain)
7. 如何平移/放大一个元素 transform:translateX(100px) tansform:scale(2)
8. 如何实现3D效果 perpective:500px transform-style:preserve-3d; transform: translate rotate...
9. CSS动画的实现方式有几种 过渡动画transtion 关键帧动画keyframes(animation)
10. 过渡动画与关键帧动画的区别：前者有状态变化、后者不需要状态、后者可以更精细
11. 如何实现逐帧动画：使用关键帧动画、去掉补间（steps）
12. 动画的性能：性能不坏、部分情况下优于JS、但JS可以做到更好、部分高危属性box-shadow等
13. 实现2栏/3栏布局：table/table-cell、float+margin、inline-block(有间隙需要处理)、flex
14. position:absolute/fixed 有什么区别，前者相对最近的absolute或relative，后者相对屏幕（viewport）且在移动端表现不好
15. display:inline-block的间隙，原因是字符间距，解决是消灭字符或消灭间距，比如把字符size设为0
16. 如何清除浮动，因为浮动元素不会占据父元素的布局空间，1、让盒子负责自己的布局（overflow：hidden（auto））,2、::after{clear: both}
17. 如何适配移动端页面，1、宽度要viewport， 2、rem/viewport/media query 3、设计上隐藏折行 留下自适应空间
18. CSS样式选择器的优先级，权重计算、!important、内联样式、后写的优先级高
19. 雪碧图的作用，利用background-position，减少http请求提高性能，某些情况可以减少图片大小（差不多的图片）
20. 自定义字体的使用场景，宣传/品牌/banner等固定文案、字体图标、
21. base64的使用，图片变成文本、减少请求、适用于小图片、base64的体积约为原图的1.3倍
22. 伪元素和伪类的区别：伪类表示状态、伪元素表示真实的区别，前者使用双冒号、后者使用单冒号
23. 美化checkbox：使用label和for属性、id，隐藏原生input  :checked + label
### BFC

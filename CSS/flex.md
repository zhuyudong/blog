display: flex
display: inline-flex
设置为flex布局后，子元素的float、clear、vertical-align将失效

父元素
flex-direction: row | row-reverse | column | column-reverse
flex-wrap: nowrap | wrap | warp-reverse(第一行在下面)
flex-flow 是 flex-direction 和 flex-wrap 的简写形式， 默认 row nowrap
justify-content: flex-start | flex-end | center | space-between | space-around（两侧的间隔相等，所以项目之间的间隔比项目与边框的间隔大一倍） 水平方向对齐方式
align-items: stretch(如果未设置高度或设为auto，将占满整个容器的高度) | flex-start | flex-end | center | baseline 垂直对齐
align-content: stretch | flex-start | flex-end | center | space-between | space-around 交叉轴对称，flex-wrap值为nowrap时表示只有一条线，多行对齐方式
主轴延顺时针方向旋转90度得到交叉轴


子元素属性：
order: 默认0，越小越靠前
flex-grow: 默认0 1是等分剩余空间
flex-shrink: 默认1，
flex-basis: 默认auto 分配多余空间前，根据这个属性，计算主轴是否有多余空间
flex 是 flex-grow flex-shrink flex-basis 的缩写， 默认 0 1 auto 快捷值 auto (1 1 auto) 和 none (0 0 auto)
align-self: auto | flex-start | flex-end | center | baseline | stretch 定义子元素的单独的对齐方式
flex-basis 需要跟flex-grow和flex-shrink配合使用才能生效，表示不伸缩的情况下子容器的的原始尺寸，主轴为横向时代表宽度，主轴为纵向时代表高度

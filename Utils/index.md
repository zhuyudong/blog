```html
    <!-- 设置缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
    <!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果） -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
    <meta name="format-detection"content="telephone=no, email=no" />

    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
```

```css
/**
   字体family
   @ 宋体 SimSun
   @ 黑体 SimHei
   @ 微信雅黑   Microsoft Yahei
   @ 微软正黑体 Microsoft JhengHei
   @ 新宋体    NSimSun
   @ 新细明体  MingLiU
   @ 细明体    MingLiU
   @ 标楷体    DFKai-SB
   @ 仿宋     FangSong
   @ 楷体     KaiTi
   @ 仿宋_GB2312  FangSong_GB2312
   @ 楷体_GB2312  KaiTi_GB2312  
   @ 说明：中文字体多数使用宋体、雅黑，英文用Helvetica
 */
body { 
   font-family: Microsoft Yahei,SimSun,Helvetica; 
} 

/* 消除transition闪屏 */
.css {
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
}
/* 启用硬件加速 tanslated3d translateZ transform */
.css {
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}

/* 改变 placeholder 的字体颜色大小 */
input::-webkit-input-placeholder {
  font-size: 14px;
  color: #333;
}
input::-moz-placeholder {
  font-size: 14px;
  color: #333;
}
input::-ms-input-placeholder {
  font-size: 14px;
  color: #333;
}
/* 让图文不可复制 */
.content {
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
```
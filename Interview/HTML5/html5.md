<a href="tel: 110">打电话给警察局</a>
<a href="sms: 110">发短信给警察局</a>
<a href="mailto: 110@govn.com">发邮件给警察局</a>
<a href="mailto: 110@govn.com?cc=baba@family.com">发邮件给警察局带抄送</a>
<a href="mailto: 110@govn.com?cc=baba@family.com&bcc=mama@family.com">发邮件给警察局带抄送和密送</a>
<a href="mailto: 110@govn.com; 120@govn.com">群发</a>
<a href="mailto: 110@govn.com?subject=SOS">发邮件带主题</a>
<a href="mailto: 110@govn.com?subject=SOS&body=快来救我">发邮件带主题和内容</a>

点击穿透：

1. 禁止混用 touch 和 click
2. 加一层透明蒙层
3. 延迟上层元素消失

```css
/* 点击元素禁止产生背景或边框 */
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
/* 禁止长按链接与图片弹出菜单 */
-webkit-touch-callout: none;
/* 禁止用户选中文字 */
-webkit-user-select: none;
user-select: none;
/* 开启硬件加速 */
transform: translate3d(0, 0, 0);
/* 让Chrome 支持小于 12px 的字 */
-webkit-text-size-adjust: none;
```

```html
<!-- 取消input输入时，英文首字母的默认大写 -->
<input autocapitalize="off" autocorrect="off" />
<!-- 视频全屏播放 -->
<video
  x-webkit-airplay="true"
  webkit-playsinline="true"
  preload="auto"
  autoplay
  src=""
></video>
<!-- 给汉字加拼音 -->
<ruby>
  前端开发核心知识进阶
  <rt>
    qianduankaifahexinzhishijinjie
  </rt>
</ruby>
<!-- 展开收起 -->
<details>
  前端开发核心知识进阶
  <summary>
    前端领域，入门相对简单，可是想要“更上一层楼”却难上加难，也就是我们常说的“职业天花板较低”，君不见——市场上高级/资深前端工程师凤毛麟角。这当然未必完全是坏事，一旦突破瓶颈，在技能上脱颖而出，便是更广阔的空间。那么，如何从夯实基础到突破瓶颈？
  </summary>
</details>
<!-- 原生进度条 -->
<progress value="22" max="100" />
<meter value="3" min="0" max="10">3/10</meter>
<meter value="0.6">60%</meter>
```

iOS 有效

- 语音和视频自动播放

```js
${window}.on('touchstart', () => {
  video.play()
})
// 微信
document.addEventListener('WeixinJSBridgeReady', () => {
  video.play()
}, false)
```

fixed 定位问题

> 这个问题主要体现在 iOS 端，比如软键盘弹出时，某些情况下，会影响 fixed 元素定位；配合使用 transform、translate 时，某些情况下，也会影响 fixed 元素定位。一般解决方案是模拟 fixed 定位，或者使用 iScroll 库。

link 和 @import 的区别？
CSS3 新增选择符有哪些？
CSS 如何定义权重规则？
如何使用纯 CSS 创建一个三角形？
CSS3 如何写出一个旋转的立方体？
localstorage 和 cookies 的区别是什么？
如何实现浏览器内多个标签页之间的通信
渐进增强和优雅降级的概念区别是什么？
如何实现 CSS3 动画？

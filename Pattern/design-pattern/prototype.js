/**
 * 用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法
 */
// 图片轮播类
// 每次子类继承都会创建父类，性能不好
var LoopImages1 = function(imgArr, container) {
  this.imagesArray = imgArr; // 轮播图片数组
  this.container = container; // 轮播图片容器
  this.createImage = function(){}; // 创建轮播图片
  this.changeImage = function(){}; // 切换下一张图片
}
// 上下滑动切换类
var SlideLoopImage1 = function(imgArr, container) {
  // 继承
  LoopImages1.call(this, imgArr, container);
  // 覆写
  this.changeImage = function() {
    console.log('SlideLoopImg1 changeImage function');
  }
}
// 渐隐切换类
var FadeLoopImg1 = function(imgArr, container, arrow) {
  LoopImages1.call(this, imgArr, container);
  this.arrow = arrow;
  this.changeImage = function() {
    console.log('FadeLoopImg1 changeImage function');
  }
}
// 实例化渐隐切换图片类
var fadeImg1 = new FadeLoopImg1([
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg'
], 'slide', [
  'left.jpg',
  'right.jpg'
]);
fadeImg1.changeImage(); // FadeLoopImg changeImage function

// 原型模式
var LoopImages2 = function(imgArr, container) {
  this.imagesArray = imgArr; // 轮播图片数组
  this.container = container; // 轮播图片容器
}
LoopImages2.prototype = {
  createImage: function() {
    console.log('LoopImages2 createImage function');
  },
  changeImage: function() {
    console.log('LoopImages2 changeImage function');
  }
};
var SlideLoopImage2 = function(imgArr, container) {
  LoopImages2.call(this, imgArr, container);
}
SlideLoopImage2.prototype = new LoopImages2();
// 覆写
SlideLoopImage2.prototype.changeImage = function() {
  console.log('SlideLoopImage2 changeImage function');
}
var FadeLoopImg2 = function(imgArr, container, arrow) {
  LoopImages2.call(this, imgArr, container);
  this.arrow = arrow;
}
FadeLoopImg2.prototype = new LoopImages2();
// 覆写
FadeLoopImg2.prototype.changeImage = function() {
  console.log('FadeLoopImg2 changeImage function');
}
var fadeImg2 = new FadeLoopImg2([
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg'
], 'slide', [
  'left.jpg',
  'right.jpg'
]);
console.log(fadeImg2.container); // slide
fadeImg2.changeImage(); // FadeLoopImg2 changeImage function
// 父类原型对象会被共享
LoopImages2.prototype.getImageLength = function() {
  return this.imagesArray.length;
};
FadeLoopImg2.prototype.getContainer = function() {
  return this.container;
}
console.log(fadeImg2.getImageLength()); // 4
console.log(fadeImg2.getContainer()); // slide

// 模板对象克隆新对象
function prototypeExtend() {
  var F = function(){},
    args = arguments,
    i = 0,
    len = args.length;
  for (; i < len; i++) {
    for (var j in args[i]) {
      F.prototype[j] = args[i][j];
    }
  }
  return new F();
}
var penguin = prototypeExtend({
  speed: 20,
  swim: function() {
    console.log('游泳速度 ' + this.speed);
  }
}, {
  run: function(speed) {
    console.log('奔跑速度 ' + speed);
  }
}, {
  jump: function() {
    console.log('跳跃动作');
  }
});
penguin.swim();
penguin.run(10);
penguin.jump();
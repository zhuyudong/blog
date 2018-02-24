/**
 *  模板模式
 * 子类放弃了对自己的控制权，而是改为父类通知子类，作为子类，只负责提供一些设计上的细节
 */
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
/* 抽象父类 */
var Beverage = function(){};
Beverage.prototype.boilWater = function() {
  console.log('把水煮沸');
};
Beverage.prototype.brew = function() {
  throw new Error('子类必须重写brew方法');
};
Beverage.prototype.pourInCup = function() {
  throw new Error('子类必须重写pourInCup方法');
};
Beverage.prototype.addCondiments = function() {
  throw new Error('子类必须重写addCondiments方法');
};
/* 添加钩子方法 */
Beverage.prototype.customerWantsCondiments = function() {
  return true;
}
/* 模板方法 */
Beverage.prototype.init = function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  // this.addCondiments();
  if (this.customerWantsCondiments()) {
    this.addCondiments();
  }
};
/* 实现子类 */
var Coffee = function(){};
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function() {
  console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function() {
  console.log('把咖啡倒进杯子');
};
Coffee.prototype.addCondiments = function() {
  console.log('加牛奶\n');
};
var coffee = new Coffee();
coffee.init();
/* 子类 */
var Tea = function(){};
Tea.prototype = new Beverage();
Tea.prototype.brew = function() {
  console.log('用沸水冲泡茶');
};
Tea.prototype.pourInCup = function() {
  console.log('把茶倒进杯子');
};
Tea.prototype.addCondiments = function() {
  console.log('加牛奶');
};
Tea.prototype.customerWantsCondiments = function() {
  console.log('需要添加调料吗？');
  return true;
  // return window.confirm('需要添加饮料吗？');
};
var tea = new Tea();
tea.init();
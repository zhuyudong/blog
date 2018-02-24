var LoginAlert = function(text) {
  this.account = text;
}
LoginAlert.prototype.show = function() {
  // 显示警示框
}
var userNameAlert = new LoginAlert('用户名不能多于16个字母或数字');
userNameAlert.show();

var LoginConfirm = function(text) {
  this.content = text;
}
LoginConfirm.prototype.show = function() {
  // 显示确认框
}
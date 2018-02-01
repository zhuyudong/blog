function myFunc() {
  if (myFunc.caller == null) {
    console.log('该函数在全局作用域内被调用');
    return ('该函数在全局作用域内被调用');
  } else {
    console.log('调用我的函数是： ', myFunc.caller);
    return ('调用我的函数是： ', myFunc.caller);
  }
}
myFunc();
function getMyFunc() {
  myFunc();
}
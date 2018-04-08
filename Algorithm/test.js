// 测试堆栈溢出所需的递归调用次数
function computeMaxCallStackSize() {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (err) {
    // Call stack overflow
    return 1;
  }
}
var time = computeMaxCallStackSize();
console.log(time); // 8956
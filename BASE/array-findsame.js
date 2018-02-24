var arr1 = [ 1,2,3,33,44];
var arr2 = [ 1,2,3,55,66];
// 找出同样的值
for (var i = 0; i < arr1.length; i++) {
  if (arr1.indexOf(arr2[i]) === -1) {
    continue;
  }
  console.log(arr2[2]);
}
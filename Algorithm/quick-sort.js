/**
 * 快排序 复杂度O(nlogn)
 * 1. 任选一个元素作为基准
 * 2. 将小于基准和大于基准的分别放到两个新数组中，等于基准的放在任一数组
 * 3. 对于两个新的数组不断重复第一步第二步，直到只剩下一个元素
 * [1, 2, 5, 4, 3] 选5
 * [1, 2, 4, 3] 5 [] 第一个选4
 * [1， 2， 3] 4 [] 5 [] 第一个选2
 * [1] 2 [3] 4 [] 5 [] OK
 */
let count = 0;
let inner = 0;
function quickSort(arr) {
  count++;
  if (arr.length <= 1) return arr;
  var mid = ~~(arr.length / 2), // 向下取整，取中间偏左的元素
    midItem = arr.splice(mid, 1)[0], // 随机取一个元素出来（改变了原数组）
    left = [],
    right =[];
  arr.forEach(function(item) {
    inner++;
    if (item <= midItem) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  var _left = quickSort(left),
    _right = quickSort(right);
  return _left.concat(midItem, _right);
}
// console.log(quickSort([1, 8, 9, 2, 7, 10, 49, 6, 32, 50]), count, inner); // [ 1, 2, 6, 7, 8, 9, 10, 32, 49, 50 ] 13 21
// 改进
function quickSort3Way(arr) {
  count++;
  if (arr.length <= 1) return arr;
  var last = arr.pop(), // 取最后一个元素作为基准（改变了原数组） 
    mid = [last], // 存放基准
    left = [],
    right =[];
  arr.forEach(function(item) {
    inner++;
    if (item < last)
      left.push(item);
    else if (item > last) 
      right.push(item);
    else
      mid.push(item);
  });
  var _left = quickSort3Way(left),
    _right = quickSort3Way(right);
  return _left.concat(mid, _right);
}
// 使用filter
// array.slice() 生成一个新的数组
function quickSortByFilter(arr) {
  return arr.length <= 1 
    ? arr 
    : quickSortByFilter(arr.slice(1).filter(item => item <= arr[0]))
        .concat(arr[0], quickSortByFilter(arr.slice(1).filter(item => item > arr[0])));
}
// 含有大量重复元素
var arr = [];
for (var i = 0; i < 1000; i++) 
  for (var j = 0; j < 10; j++)
    arr.push(i);

console.time('quickSort');
quickSort(arr.concat());
console.timeEnd('quickSort');

console.time('quickSort3Way');
quickSort3Way(arr.concat());
console.timeEnd('quickSort3Way');

console.time('quickSortByFilter');
quickSortByFilter(arr.concat());
console.timeEnd('quickSortByFilter');

console.time('v8 sort');
arr.concat().sort(function(a, b) {
  return a - b;
});
console.timeEnd('v8 sort');
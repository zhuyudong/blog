// https://juejin.im/post/58c9d5fb1b69e6006b686bce
// 冒泡排序
// 双向冒泡排序
// 选择排序
// 插入排序
// 折半插入排序
// 希尔排序
// 归并排序
// 堆排序
// 计数排序
// 桶排序
// 基数排序
// 直接插入排序
function directInsertionSort(array) {
  var length = array.length, index, current;
  for (var i = 1; i < length; i++) {
    index = i - 1; // 待比较的元素下标
    current = array[i]; // 当前元素
    while (index >= 0 && array[index] > current) { // 待比较元素比当前元素大
      array[index + 1] = array[index]; // 待比较元素后移一位
      index--;
      console.log(array);
    }
    if (index + 1 !== i) {
      array[index + 1] = current;
      console.log(array);
    }
  }
  return array;
}
directInsertionSort([5,4,3,2,1]);
/**
 * [ 5, 5, 3, 2, 1 ]
[ 4, 5, 3, 2, 1 ]
[ 4, 5, 5, 2, 1 ]
[ 4, 4, 5, 2, 1 ]
[ 3, 4, 5, 2, 1 ]
[ 3, 4, 5, 5, 1 ]
[ 3, 4, 4, 5, 1 ]
[ 3, 3, 4, 5, 1 ]
[ 2, 3, 4, 5, 1 ]
[ 2, 3, 4, 5, 5 ]
[ 2, 3, 4, 4, 5 ]
[ 2, 3, 3, 4, 5 ]
[ 2, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
 */

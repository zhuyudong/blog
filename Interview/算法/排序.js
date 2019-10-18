// n个数据有n!种组合
// 完全有序的元素 满有序度 n*(n - 1) / 2
// 逆序度 = 满有序度 - 有序度
/**
 * 冒泡
 * 空间复杂度O(1)、原地排序、稳定 最小 O(n)、平均 O(n^2)、 最坏 O(n^2)
 * /
// 都从头开始遍历
const bubbleSort1 = arr => {
  const len = arr.length
  if (len === 1) return
  /**
   * i: 0
   * j: 0 1 2 3 4 第1次遍历交换将最大值置于末尾
   *
   * i: 1
   * j: 0 1 2 3 第1次遍历将第2最大值置于倒数第2个位置
   *
   * i: 2
   * j: 0 1 2 第2次遍历将第2最大值置于倒数第3个位置
   *
   * i: 3
   * j: 0 1 第3次遍历将第3最大值置于倒数第4个位置
   *
   * i: 4
   * j: 0 第4次遍历将第4最大值置于倒数第5个位置
   *
   * i: 5 第5次遍历开始 arr[0] 右侧已完成排序
   */
  for (let i = 0; i < len; i++) {
    console.log("i: ", i)
    let hasChange = false
    for (let j = 0; j < len - i - 1; j++) {
      console.log("j: ", j)
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp
        // 与上面三句等效
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        hasChange = true
      }
    }
    if (!hasChange) break
  }
  console.log(arr)
  return arr
}
// 从两头往中间
const bubbleSort2 = arr => {
  const len = arr.length
  if (len === 1) return arr
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  console.log(arr)
  return arr
}
const array = [4, 5, 6, 3, 2, 1]
// bubbleSort1(array)
// bubbleSort2(array)

/* 选择排序 */
/**
 * 基本思想：找最小交换
 * 空间复杂度 O(1)、时间复杂度都是 O(n^2)、非稳定
 * 1. 遍历一次找到最小的值
 * 2. 将最小值和最左侧进行位置交换
 * 3. 重复以上过程，已交换过的左侧保持不动
 */
const selectionSort = arr => {
  const len = arr.length
  if (len <= 1) return arr
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    // 内循环找出最小值的下标
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 保存此次循环最小值的下标
        minIndex = j
      }
    }
    ;[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    // 等效于如下
    // const temp = arr[i]
    // arr[i] = arr[minIndex]
    // arr[minIndex] = temp
  }
  return arr
}
// selectionSort(array)

/***** 插入排序 *****/
/**
 * 基本思想：在有序中插入数据，初始认为第一个元素是有序数据
 * 移动次数 = 逆序度
 * 涉及元素的比较和移动
 * 空间复杂度 O(1)、稳定、最好 O(n)、最坏 O(n^2)、平均 O(n^2) 和冒泡一样，但是总体性能比冒泡好
 * 1. 以arrary[0] 比较 array[1]
 * 2. 如小于 array[0] 则与之交换
 * 3. 用 array[2] 比较 array[0] 和 array[1]
 * 4. 如 array[2] 小于arr[0]或arr[1]则进行插入到合适位置
 * 5. 重复以上过程
 */
// [4, 5, 6, 3, 2, 1]
const insertionSort = arr => {
  const len = arr.length
  if (len <= 1) return arr
  // 从 1 向右
  for (let i = 1; i < len; i++) {
    const temp = arr[i]
    let j = i - 1
    // 从i-1到0找出是否有比arr[i] 大的，有则
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        /**
         * i = 3 temp = 3
         * [ 4, 5, 6, 6, 2, 1 ]
         * [ 4, 5, 5, 6, 2, 1 ]
         * [ 4, 4, 5, 6, 2, 1 ]
         * i = 4 temp = 2
         * [ 3, 4, 5, 6, 6, 1 ]
         * [ 3, 4, 5, 5, 6, 1 ]
         * [ 3, 4, 4, 5, 6, 1 ]
         * [ 3, 3, 4, 5, 6, 1 ]
         * i = 5 temp = 1
         * [ 2, 3, 4, 5, 6, 6 ]
         * [ 2, 3, 4, 5, 5, 6 ]
         * [ 2, 3, 4, 4, 5, 6 ]
         * [ 2, 3, 3, 4, 5, 6 ]
         * [ 2, 2, 3, 4, 5, 6 ]
         */
        //
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    /**
     * j = 0
     * j = 1
     * j = -1
     * [ 3, 4, 5, 6, 2, 1 ]
     * j = -1
     * [ 2, 3, 4, 5, 6, 1 ]
     * j = -1
     * [ 1, 2, 3, 4, 5, 6 ]
     */
    arr[j + 1] = temp
  }
  return arr
}
// insertionSort(array)

/* 快排 */
/**
 * left 是为找到大于pivot数字，right是为找到小于pivot数字
 * 基于递归的思想
 * 1. 将最右侧数字标记为pivot，最左侧为left，pivot或pivot - 1 为 right
 * 2. 向右移动 left直到大于 right 或等于 pivot 时
 * 3. 向左移动right直到小于pivot时，将 right 和 left 交换位置
 * 4. 再次移动左重复步骤 2
 * 5. 移动right重复步骤 3 或碰到 left 时停止，将其与 pivot 交换
 * 6. pivot 在新的位置上了，分别对 pivot 左右重复以上逻辑
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivot = right
    /**
     * 0
     * 3
     * 1
     * 4
     */
    let partitionIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
    quickSort(
      arr,
      partitionIndex + 1 > right ? right : partitionIndex + 1,
      right
    )
  }
}
// 获取 pivot 交换完后的 index
const partition = (arr, pivot, left, right) => {
  const pivotVal = arr[pivot]
  let startIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// quickSort(array, 0, array.length - 1)
console.log(array)

/* 归并排序 */
/**
 * 稳定、时间复杂度都是O(nlogn)、非原地、空间复杂度 O(n)
 */


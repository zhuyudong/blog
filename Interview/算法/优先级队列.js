// 优先级队列：入队、出队时优先级最高的元素出队
// 时间复杂度O(logn)
// 使用二叉堆
class PriorityQueue {
  constructor() {
    this.arr = []
  }

  enqueue() {}

  dequeue() {}
}

// const p = new PriorityQueue()
// p.enqueue(5, 6)
// p.enqueue(2, 100)
// p.enqueue(90, 1)

// console.log(p.dequeue()) // -> 2
// console.log(p.dequeue()) // -> 5
// console.log(p.dequeue()) // -> 90

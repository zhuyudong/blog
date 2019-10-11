/**
 * 基于链表实现的循环队列
 * TODO
 */
class Node {
  constructor(element) {
    this.element = element
    this.head = null
  }
}

class CricularQueue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.head.next = this.head
      this.tail = this.head
    } else {
      // 是否满队
      const flag = (this.head = this.head)
      this.tail.next = new Node(value)
      this.tail.next.next = this.head
      this.tail = this.tail.next
      if (flag) {
        this.head.next = this.tail
      }
    }
  }
}

/**
 * 基于链表实现的队列
 */

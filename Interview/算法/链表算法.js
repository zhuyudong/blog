/**
 * 1 单链表反转
 * 2 链表中环的检测
 * 3 两个有序的链表合并
 * 4 删除链表倒数第n个节点
 * 5 求链表的中间节点
 */
class Node {
  constructor(element) {
    this.element = this.element
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = new Node("head")
  }

  findByValue(item) {}

  findByIndex(index) {}

  append(element) {}

  insert(newElement, element) {}

  findPrev() {}

  remove(element) {}

  display() {}

  /* algo */
  // 尾插法 反转链表  ⭐️⭐️⭐️⭐️⭐️
  reverseList() {
    const root = new Node("head")
    let currentNode = this.head.next
    while (currentNode !== null) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }
  // 增强尾插法，反转链表

  // 递归法，反转链表

  // 环验证
  checkCircle() {
    let slow = this.head
    let fast = this.head.next
    while (slow.next !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) return true
    }
    return false
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {}

  // 求中间节点
  findMiddleNode() {
    let fast = this.head
    let slow = this.head
    while (slow.next !== null && fast.next.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }
}

// 合并两个有序链表
const mergeSortedLists = (listA, listB) => {
  if (!listA) {
    return listB
  }
  if (!listB) {
    return listA
  }
}

// 测试

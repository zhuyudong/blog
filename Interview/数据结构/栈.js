/**
 * 基于链表实现的栈
 */
class Node {
  constructor(ele) {
    this.element = ele
    this.next = null
  }
}
class StackBasedLinkedList {
  constructor() {
    this.top = null
  }
  pop() {
    if (!this.top) {
      return -1
    }
    const value = this.top.element
    this.top = this.top.next
    return value
  }
  push(value) {
    const node = new Node(value)
    if (this.top === null) {
      this.top = node
    } else {
      // 往下压一栈
      node.next = this.top
      this.top = node
    }
  }
  clear() {
    this.top = null
  }
  display() {
    if (this.top !== null) {
      let temp = this.top
      while (temp !== null) {
        console.log(temp.element)
        temp = temp.next
      }
    }
  }
}
const stack = new StackBasedLinkedList()
stack.push(1)
stack.push(2)
stack.push(3)
let res = 0
console.log("--------获取pop元素-------")
while (res !== -1) {
  res = stack.pop()
  console.log(res)
}
/**
 * 使用前后栈实现浏览器的前进后退
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = new Node("head")
  }

  findByValue(item) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  findByIndex(index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    return currentNode === null ? -1 : currentNode
  }

  // 末尾追加
  append(newElement) {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = new Node(newElement)
  }

  // 指定元素后插入
  insert(newElement, element) {
    const currentNode = this.findByValue(element)
    if (currentNode === -1) {
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  findPrev(item) {
    let currentNode = this.head
    if (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return -1
    }
    return currentNode
  }

  remove(item) {
    let prevNode = this.findPrev(item)
    if (prevNode === -1) {
      return
    }
    prevNode.next = prevNode.next.next
  }

  display() {
    let currentNode = this.head.next
    if (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
}

// 测试
const LList = new LinkedList()
LList.append("chen")
LList.append("curry")
LList.append("sang")
LList.append("zhao")
LList.insert("qian", "chen")
LList.insert("zhou", "zhao")
LList.display()
LList.remove("curry")
LList.display()
LList.findByValue("chen")
LList.findByIndex("2")
LList.insert("head", "sang")
LList.display()
LList.findPrev("head")
LList.remove("head")
LList.display()

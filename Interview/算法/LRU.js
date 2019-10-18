/* 最近最少使用算法 */
/**
 * get 时已存在将其转移至链头，不存在返回-1
 * put时已满删除队尾并把新的放在链头，未满则直接将其放在链头
 */
// 使用双链表+Map来保证 O(1) 的时间复杂度
function Node(key, val) {
  this.key = key
  this.value = val
  this.left = thie.right = null
}
/*
const LRUCache = function(capacity) {
  this.capacity = capacity
  this.tail = this.head = new Node(-2, -2)
  this.map = new Map()
}

LRUCache.prototype.get = function(key) {
  let node = this.map.get(key)
  if (node === undefined) {
    return -1
  }
  node.pre.next = node.next
}
//*/
const LRUCache = function(capacity) {
  this.map = {} // 能保证查找时间复杂度是 1
  this.size = 0 // 用于判断是否已满
  this.maxSize = capacity

  // 初始化链表只有头尾
  this.head = {
    prev: null,
    next: null
  }

  this.tail = {
    prev: this.head,
    next: null
  }

  this.head.next = this.tail
}
LRUCache.prototype.get = function(key) {
  if (this.map[key]) {
    const node = this.extractNode(this.map[key])
    this.inserNodeToHead(node)
    return this.map[key].val
  } else {
    return -1
  }
}
LRUCache.prototype.put = function(key, value) {
  let node
  // 已经存在更新其value
  if (this.map[key]) {
    node = this.extractNode(this.map[key])
    node.val = value
  } else {
    // 不存在则新增到头部，并删除尾部
    node = {
      prev: null,
      next: null,
      val: value,
      key
    }
    this.map[key] = node
    this.size++
  }
  // 不管存不存在都放到头部，满删除下面再做
  this.inserNodeToHead(node)

  // 执行可能的删除尾部操作，要先判断是否已满
  if (this.size > this.maxSize) {
    const nodeToDelete = this.tail.prev
    const keyToDelete = nodeToDelete.key
    this.extractNode(nodeToDelete)
    this.size--
    delete this.map[keyToDelete]
  }
}

// node.next = head.next head->next = node
LRUCache.prototype.inserNodeToHead = function(node) {
  const head = this.head
  const lastFirstNode = this.head.next
  node.prev = head
  node.next = node
  node.next = lastFirstNode
  lastFirstNode.prev = node
  return node
}

// 将节点从原来位置删除，变为独立节点
LRUCache.prototype.extractNode = function(node) {
  const beforeNode = node.prev
  const afterNode = node.next

  beforeNode.next = afterNode
  afterNode.prev = beforeNode

  node.prev = null
  node.next = null

  return node
}

// 测试

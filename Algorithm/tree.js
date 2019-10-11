// 中序遍历
var inorderTraversal = function(root, arrary = []) {
  if (root) {
    inorderTraversal(root.left, array)
    arrary.push(root.val)
    inorderTraversal(root.right, array)
  }
  return array
}

// 前序遍历

// 后序遍历

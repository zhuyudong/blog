/* 获取文档中任意一个元素距离文档 document 顶部的距离 */
const offset = ele => {
  let result = {
    top: 0,
    left: 0
  }

  const getOffset = (node, init) => {
    // nodeType === 1 表示 dom 元素
    // // https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
    if (node.nodeType !== 1) {
      return
    }

    position = window.getComputedStyle(node)["position"]
    // typeof 可以当作函数使用，正常布局
    if (typeof init === "undefined" && position === "static") {
      // 递归取父元素
      getOffset(node.parentNode)
      return
    }

    result.top = node.offsetTop + result.top - node.scrollTop
    result.left = node.offsetLeft + result.top - node.scrollLeft

    if (position === "fixed") {
      return
    }
    getOffset(node.parentNode)
  }
  // 隐藏元素不占空间
  if (window.getComputedStyle(ele)["display"] === "none") {
    return result
  }

  let position

  getOffset(ele, true)

  return result
}

// 使用getBoundingClientRect
// https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMClientRect
const offset = ele => {
  let result = {
    top: 0,
    left: 0
  }
  // IE11 以下，直接返回
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getClientRects
  if (!ele.getClientRects().length) {
    return result
  }
  if (window.getComputedStyle(ele)["display"] === "none") {
    return result
  }
  result = ele.getBoundingClientRect()
  // ownerDocument 当前元素的 document 对象，其是当前元素的祖先
  // documentElement 得到当前元素的HTML节点
  var docElement = ele.ownerDocument.documentElement

  // pageYOffset、pageXOffset 表示文档在窗口左上角垂直和水平方向滚动的距离
  return {
    top: result.top + window.pageYOffset - docElement.clientTop,
    left: result.left + window.pageXOffset - docElelemt.clientLeft
  }
}

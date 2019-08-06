function createTree(array, rootNodes) {
  const tree = []

  for (const rootNode in rootNodes) {
    const node = rootNodes[rootNode]
    const childNode = array[node.id]

    if (!node && !rootNodes.hasOwnProperty(rootNode)) {
      continue
    }

    if (childNode) {
      node.children = createTree(
        array,
        childNode
      )
    }

    tree.push(node)
  }

  return tree
}

function groupBy(array, by) {
  return array.reduce((acc, cur) => {
    acc[cur[by]] = cur
    return acc
  }, {})
}

function groupByParents(array) {
  const arrayByID = groupBy(array, 'id')

  return array.reduce(function(prev, item) {
    let parentID =  item.parentId
    if (!parentID) {
      parentID = 'null'
    }

    if (parentID && prev.hasOwnProperty(parentID)) {
      prev[parentID].push(item)
      return prev
    }

    prev[parentID] = [item]
    return prev
  }, {})
}

function arrayToTree(array) {

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }

  if (array.length === 1) return array

  const grouped = groupByParents(array)
  return createTree(
    grouped,
    grouped['null']
  )
}

console.log(arrayToTree([
  {id: 2, name: '2', parentId: 1},
  {id: 1, name: '1', parentId: null},
  {id: 3, name: '3', parentId: 2},
  {id: 4, name: '4', parentId: 2},
  {id: 5, name: '5', parentId: 3},
  {id: 6, name: '6', parentId: 1},
  {id: 7, name: '7', parentId: 3},
  {id: 8, name: '8', parentId: 2}
]))
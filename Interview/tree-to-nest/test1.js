const data = [
  {id: 2, name: '2', parentId: 1},
  {id: 1, name: '1', parentId: null},
  {id: 3, name: '3', parentId: 2},
  {id: 4, name: '4', parentId: 2},
  {id: 5, name: '5', parentId: 3},
  {id: 6, name: '6', parentId: 1},
  {id: 7, name: '7', parentId: 3},
  {id: 8, name: '8', parentId: 2}
]

function createTree(obj, rootNodes) {
  const tree = []
  for (const rootNode in rootNodes) {
    const node = rootNodes[rootNode]

    if (!node) {
      continue
    }
    const childNode = obj[node.id]
    if (childNode) {
      node.children = createTree(
        obj,
        childNode
      )
    }
    tree.push(node)
  }

  return tree
}

function groupById(array, by) {
  return array.reduce((acc, cur) => {
    acc[cur[by]] = cur
    return acc
  }, {})
}

function groupByParents(array, options) {
  var arrayByID = groupBy(array, options.customID)

  return array.reduce(function(prev, item) {
    var parentID = property.get(item, options.parentProperty)
    if (!parentID) {
      parentID = options.rootID
    }

    if (parentID) {
      prev[parentID].push(item)
      return prev
    }

    prev[parentID] = [item]
    return prev
  }, {})
}

function convert2Tree(array) {

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array')
  }

  if (array.length === 1) return array
  // array.sort((a, b) => a.parentId - b.parentId)
  const obj = groupByParents(array)

  return createTree(
    obj,
    obj['null'] // array[0].parentId
  )
}

console.log(convert2Tree(data))
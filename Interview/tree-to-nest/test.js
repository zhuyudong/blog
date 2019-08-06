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

function groupById(array) {
  return array.reduce((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
}
function groupById(array, options) {
  var arrayByID = keyBy(array, options.customID)

  return array.reduce(function(prev, item) {
    var parentID = property.get(item, options.parentProperty)
    if (!parentID || !arrayByID.hasOwnProperty(parentID)) {
      parentID = options.rootID
    }

    if (parentID && prev.hasOwnProperty(parentID)) {
      prev[parentID].push(item)
      return prev
    }

    prev[parentID] = [item]
    return prev
  }, {})
}

function createTree(array, rootNodes) {
  for (const node in rootNodes) {
    childNode = array[node.id]

  }
}

const convert2Tree = (array) => {
  if (!Array.isArray(array)) throw new Error('Expected an array')
  if (array.length === 1) return array
  array.sort((a, b) => a.parentId - b.parentId)
  const kvs = groupById(array)
  const dones = [array[0].id]
  const init = [array[0]]
  // return array.reduce((acc, cur, ix) => {
  //   const fd = acc.find(i => i.id === cur.parentId)
  //   if (fd) {
  //     fd.children = (fd.children || []).concat(cur)
  //   }
  //   // acc.map(i => {
  //   //   if (i.id === cur.parentId) {
  //   //     i.children = (i.children || []).concat(cur)
  //   //   }
  //   //   return acc
  //   // })
  //   return acc
  // }, init)
  for (const node in kvs) 
}

console.log(groupById(data))
// console.log(convert2Tree(data))
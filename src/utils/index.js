// 扁平化数组转树形数组
export function arrayToTree(arrs) {
  let list = JSON.parse(JSON.stringify(arrs))
  let menu = []
  const map = {}
  // 平铺到 map 中，方便查找
  list.forEach((item) => {
    if (!map[item.id]) {
      map[item.id] = item
    }
  })
  // 寻找对应关系
  list.forEach((item) => {
    let parent = map[item.parentId]
    if (parent) {
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
    } else {
      menu.push(item)
    }
  })
  return menu
}

// 找出当前节点的所有父节点
export function getParentsId(arr, id) {
  if (!id) {
    return []
  }
  let currItem = {}
  let parents = []
  for (const item of arr) {
    if (item.id === id) {
      currItem = item
      break
    }
  }
  let pItem = { ...currItem }
  while (pItem.parentId) {
    parents.unshift(pItem.parentId)
    for (const item of arr) {
      if (item.id === pItem.parentId) {
        pItem = { ...item }
        break
      }
    }
  }
  return parents
}

// 找出当前节点所有的子节点
export function getChildsId(arr, id) {
  const currIds = []
  for (const item of arr) {
    if (item.parentId === id) {
      let currId = item.id
      currIds.push(item.id, ...getChildsId(arr, currId))
    }
  }
  return currIds
}

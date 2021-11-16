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
/**
 * @param {Array} arr 菜单列表
 * @param {*} id  当前id
 * @param {Boolean} showInfo 是否返回全部信息，为 false 只返回 Id
 * @returns
 */
export function getParentsId(arr, id, showInfo = false) {
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
    parents.unshift(showInfo ? { ...pItem } : pItem.parentId)
    for (const item of arr) {
      if (item.id === pItem.parentId) {
        pItem = { ...item }
        break
      }
    }
  }
  return showInfo ? [{ ...pItem }, ...parents] : parents
}

// 根据路径寻找菜单Id
export function getPathForId(arr, path) {
  for (const item of arr) {
    if (item.path === path) {
      return {
        id: item.id,
        menuItem: item,
      }
    }
  }
  return undefined
}

// 根据菜单Id寻找路径
export function getIdForPath(arr, id) {
  for (const item of arr) {
    if (item.id === id) {
      return {
        path: item.path,
        menuItem: item,
      }
    }
  }
  return undefined
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

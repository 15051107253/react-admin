export function arrayToTree(arrs) {
  let menu = []
  const map = {}
  // 平铺到 map 中，方便查找
  arrs.forEach((item) => {
    if (!map[item.id]) {
      map[item.id] = item
    }
  })
  // 寻找对应关系
  arrs.forEach((item) => {
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

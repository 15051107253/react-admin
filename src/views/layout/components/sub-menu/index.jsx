import React, { useEffect } from 'react'
import { Menu, message } from 'antd'
import { MyIcon } from '@/components'
import { useHistory } from 'react-router-dom'
import menuList from '../../menu'
import { useAppTabs, useOpenKeys, useSelectedKeys } from '@/store'
import { arrayToTree, getParentsId, getChildsId } from '@/utils'

const { SubMenu } = Menu

const menuMap = (menus, handleMenuItem) => {
  return menus.map((item) => {
    if (item.children && item.children.length) {
      return (
        <SubMenu key={item.id} icon={item.icon ? <MyIcon type={item.icon} /> : ''} title={item.title}>
          {menuMap(item.children, handleMenuItem)}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item onClick={() => handleMenuItem(item)} key={item.id}>
          {item.title}
        </Menu.Item>
      )
    }
  })
}

const SubMenuWrap = () => {
  console.log(111)
  const history = useHistory()
  // const [openKeys, setOpenKeys] = useState(getParentsId(menuList, window.sessionStorage.currentMenuId))
  const [openKeys, setOpenKeys] = useOpenKeys()
  // const [selectedKeys, setSelectedKeys] = useState([window.sessionStorage.currentMenuId])
  const [selectedKeys, setSelectedKeys] = useSelectedKeys()
  const { setAppTabs } = useAppTabs()
  const handleMenuItem = (item) => {
    console.log(item)
    const { id, path } = item
    if (!path) {
      message.error('该页面未配置路由，无法跳转！')
      return false
    }
    // 把点击的菜单子项加入全局tabs中
    setAppTabs(item)
    setSelectedKeys([id])
    window.sessionStorage.currentMenuId = id
    history.push(path)
  }
  const handleOpenChange = (item) => {
    if (item.length > openKeys.length) {
      // 有菜单打开
      let subId = item.pop() // 当前打开的菜单
      const selectKeysParentIds = getParentsId(menuList, [...selectedKeys]) // 找出当前选中的菜单子项所有的父级
      if (selectKeysParentIds.includes(subId)) {
        // 如果当前选中的菜单子项的父级中
        setOpenKeys([...selectKeysParentIds])
      } else {
        setOpenKeys([...openKeys, subId])
      }
    } else {
      // 有菜单关闭
      let subId = null // 找出是哪个菜单关闭了
      for (const menuId of openKeys) {
        if (!item.includes(menuId)) {
          subId = menuId
          break
        }
      }
      let childs = [subId, ...getChildsId(menuList, subId)] // 找到当前节点及其所有子节点
      let closeKeys = []
      for (const key of openKeys) {
        if (!childs.includes(key)) {
          closeKeys.push(key)
        }
      }
      setOpenKeys(closeKeys)
    }
  }

  useEffect(() => {
    setOpenKeys(getParentsId(menuList, window.sessionStorage.currentMenuId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setSelectedKeys([window.sessionStorage.currentMenuId])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.sessionStorage.currentMenuId])

  return (
    <Menu
      mode='inline'
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      style={{ height: '100%', borderRight: 0 }}
    >
      {menuMap(arrayToTree(menuList), handleMenuItem)}
    </Menu>
  )
}

export default SubMenuWrap

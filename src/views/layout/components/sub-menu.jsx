import React, { useEffect, useState } from 'react'
import { Menu, message } from 'antd'
import { MyIcon } from '@/components'
import { useHistory } from 'react-router-dom'
import menuList from '../menu'
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
  const history = useHistory()
  const [openKeys, setOpenKeys] = useState(getParentsId(menuList, window.sessionStorage.currentMenuId))
  const [selectedKeys, setSelectedKeys] = useState([window.sessionStorage.currentMenuId])
  const handleMenuItem = (item) => {
    console.log(item)
    const { id, path } = item
    if (!path) {
      message.error('该页面未配置路由，无法跳转！')
      return false
    }
    // const parentIds = getParentsId(menuList, id)
    // setOpenKeys(parentIds)
    setSelectedKeys([id])
    window.sessionStorage.currentMenuId = id
    history.push(path)
  }
  const handleOpenChange = (item) => {
    // console.log(item, openKeys)
    if (item.length > openKeys.length) {
      // 有菜单打开
      let subId = item.pop() // 当前打开的菜单
      const selectKeysParentIds = getParentsId(menuList, [...selectedKeys]) // 找出当前选中的菜单子项所有的父级
      if (selectKeysParentIds.includes(subId)) {
        // 如果当前选中的菜单子项的父级中
        // console.log(selectKeysParentIds)
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
      // console.log(childs)
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
    console.log()
  }, [])
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

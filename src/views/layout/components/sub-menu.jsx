import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import menu from '../menu'
import { arrayToTree } from '@/utils'

const { SubMenu } = Menu

const menuMap = (menus) => {
  return menus.map((item) => {
    if (item.children && item.children.length) {
      return (
        <SubMenu key={item.id} icon={<UserOutlined />} title={item.title}>
          {menuMap(item.children)}
        </SubMenu>
      )
    } else {
      return <Menu.Item key={item.id}>{item.title}</Menu.Item>
    }
  })
}

const SubMenuWrap = () => {
  useEffect(() => {
    console.log(arrayToTree(menu))
  }, [])
  return (
    <Menu mode='inline' defaultSelectedKeys={['10000']} defaultOpenKeys={[]} style={{ height: '100%', borderRight: 0 }}>
      {menuMap(arrayToTree(menu))}
    </Menu>
  )
}

export default SubMenuWrap

import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined, ExportOutlined } from '@ant-design/icons'
import style from './style.module.less'

const UserMenu = () => {
  const history = useHistory()

  const handleMenu = ({ key }) => {
    console.log(key)
    if (key === 'exit') {
      history.push('/login')
    }
  }

  const menu = (
    <Menu onClick={handleMenu}>
      <Menu.Item key='userInfo' icon={<UserOutlined />}>
        个人中心
      </Menu.Item>
      <Menu.Item key='exit' icon={<ExportOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={style.userMenu}>
      <Dropdown overlay={menu}>
        <div className={style['wrapper']} style={{ display: 'flex' }}>
          <Avatar size={36} icon={<UserOutlined />} />
          <span>管理员</span>
        </div>
      </Dropdown>
    </div>
  )
}

export default UserMenu

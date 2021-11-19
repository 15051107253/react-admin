import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const UserMenu = () => {
  return (
    <div>
      <Avatar size={40} icon={<UserOutlined />} />
    </div>
  )
}

export default UserMenu

import React from 'react'
import { Layout } from 'antd'
import Logo from './logo'
import UserMenu from './userMenu'
import style from './style.module.less'

const Header = () => {
  console.log(style)
  return (
    <Layout.Header className={style.header}>
      <Logo />
      <UserMenu />
    </Layout.Header>
  )
}

export default Header

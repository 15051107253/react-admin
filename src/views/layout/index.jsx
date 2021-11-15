import React, { useState } from 'react'
import { Layout, message } from 'antd'
import { renderRoutes } from 'react-router-config'
import { useLocation, Redirect } from 'react-router-dom'
import routes from '@/router'
import SubMenu from './components/sub-menu'
import menuList from './menu'
import { getPathForId, getIdForPath } from '@/utils'

import style from './style.module.less'

const { Header, Content, Sider } = Layout

const AppLayout = () => {
  const [appLoadingFinish, setAppLoadingFinish] = useState(false)
  const location = useLocation()
  console.log(location)
  if (!appLoadingFinish) {
    setTimeout(() => {
      console.log(1312)
      setAppLoadingFinish(true)
    }, 5000)
  }

  if (appLoadingFinish) {
    console.log(location.pathname)
    if (location.pathname === '/') {
      if (window.sessionStorage.currentMenuId) {
        const path = getIdForPath(menuList, window.sessionStorage.currentMenuId)
        return <Redirect to={path} />
      }
      const id = getPathForId(menuList, '/dashboard/home')
      window.sessionStorage.currentMenuId = id
      return <Redirect to='/dashboard/home' />
    } else {
      const id = getPathForId(menuList, location.pathname)
      window.sessionStorage.currentMenuId = id
    }
    return (
      <Layout className={style['layout']}>
        <Header className={style['header']}>
          <div className={style['logo-wrap']}>
            <div className={style['logo']}>LOGO</div>
          </div>
          {/* <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Layout>
          <Sider width={200} className={style['menu-wrap']}>
            <SubMenu />
          </Sider>
          <Layout className={style['content']}>
            <div className={style['tabs']}>tab栏</div>
            <Content className={style['content-wrap']}>{renderRoutes(routes)}</Content>
          </Layout>
        </Layout>
      </Layout>
    )
  } else {
    return <div>正在加载中...</div>
  }
}

export default AppLayout

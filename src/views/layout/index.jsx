import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { renderRoutes } from 'react-router-config'
import { useLocation, useHistory } from 'react-router-dom'
import routes from '@/router'
import SubMenu from './components/sub-menu'
import Tab from './components/tab'
import Breadcrumb from './components/breadcrumb'
import CollapsedBtn from './components/collapsed-btn'
import LoadingPage from '@/views/common/loading-page'
import menuList from './menu'
import { getPathForId, getIdForPath } from '@/utils'
import { useAppTabs, useAppCollapsed } from '@/store'
import style from './style.module.less'

const { Header, Content, Sider } = Layout

const AppLayout = () => {
  const [appLoadingFinish, setAppLoadingFinish] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const { setAppTabs } = useAppTabs()
  const [collapsed] = useAppCollapsed()
  useEffect(() => {
    if (!appLoadingFinish) {
      setTimeout(() => {
        setAppLoadingFinish(true)
      }, 1000)
    } else {
      if (location.pathname === '/') {
        if (window.sessionStorage.currentMenuId) {
          const { path, menuItem } = getIdForPath(menuList, window.sessionStorage.currentMenuId)
          setAppTabs(menuItem)
          history.push(path)
        }
        const { id, menuItem } = getPathForId(menuList, '/dashboard/home')
        window.sessionStorage.currentMenuId = id
        setAppTabs(menuItem)
        history.push('/dashboard/home')
      } else {
        const { id, menuItem } = getPathForId(menuList, location.pathname)
        window.sessionStorage.currentMenuId = id
        setAppTabs(menuItem)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appLoadingFinish])

  if (appLoadingFinish) {
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
          <Sider width={200} className={style['menu-wrap']} collapsed={collapsed}>
            <SubMenu />
            <div className={style['menu-wrap-bottom']}>
              <CollapsedBtn />
            </div>
          </Sider>
          <Layout className={style['content']}>
            <Breadcrumb />
            <Tab />
            <Content className={style['content-wrap']}>{renderRoutes(routes)}</Content>
          </Layout>
        </Layout>
      </Layout>
    )
  } else {
    return <LoadingPage />
  }
}

export default AppLayout

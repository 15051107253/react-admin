import React from 'react'
import { Layout } from 'antd'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'
import SubMenu from './components/sub-menu'
import style from './style.module.less'

const { Header, Content, Sider } = Layout

const AppLayout = () => {
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
          <Content className={style['content-wrap']}>
            <HashRouter>{renderRoutes(routes)}</HashRouter>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout

import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useAppCollapsed, useOpenKeys } from '@/store'
import style from './style.module.less'

const CollapsedBtn = () => {
  const [collapsed, setCollapsed] = useAppCollapsed()
  const [openKeys, setOpenkeys] = useOpenKeys()

  const handleCollapsed = () => {
    if (!collapsed) {
      window.CURRENT_OPENKEY = [...openKeys]
    } else {
      console.log('展开')
      setOpenkeys(window.CURRENT_OPENKEY || [])
    }
    setCollapsed(!collapsed)
  }
  return (
    <div className={style['tabs-menu']}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: handleCollapsed,
      })}
    </div>
  )
}

export default CollapsedBtn

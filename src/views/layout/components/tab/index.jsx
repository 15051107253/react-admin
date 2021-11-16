import React from 'react'
import { useHistory } from 'react-router-dom'
import { CloseCircleOutlined } from '@ant-design/icons'

import style from './style.module.less'
import { useAppTabs } from '@/store'

const Tab = () => {
  const { appTabs, setAppTabs } = useAppTabs()
  const history = useHistory()
  const handleTabItem = (item) => {
    const { id, path } = item
    window.sessionStorage.currentMenuId = id
    history.push(path)
  }

  const deleteTab = (e, item) => {
    e.stopPropagation()
    // tab栏中的数量大于2时才走删除
    if (appTabs.length > 1 && window.sessionStorage.currentMenuId === item.id) {
      const nextItem = appTabs[appTabs.length - 2]
      window.sessionStorage.currentMenuId = nextItem.id
      history.push(nextItem.path)
    }
    setAppTabs(item, 'delete')
  }

  return (
    <div className={style['tabs']}>
      {appTabs.map((item, index) => {
        return (
          <div
            onClick={() => handleTabItem(item)}
            className={`${style['tab-item']} ${
              window.sessionStorage.currentMenuId === item.id ? style['tab-item-active'] : ''
            }`}
            key={index}
          >
            {item.title}
            {item.tabDisabled ? (
              ''
            ) : (
              <span className={style['tab-item-close']}>
                <CloseCircleOutlined onClick={(e) => deleteTab(e, item)} />
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Tab

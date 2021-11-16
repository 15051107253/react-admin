import React from 'react'
import { getParentsId } from '@/utils'
import menuList from '../../menu'
import style from './style.module.less'

const Breadcrumb = () => {
  const breadcrumbList = getParentsId(menuList, window.sessionStorage.currentMenuId, true)
  return (
    <div>
      <ul className={style.breadcrumb}>
        {breadcrumbList.map((item, index) => {
          return (
            <li className={style['breadcrumb-item']} key={index}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb

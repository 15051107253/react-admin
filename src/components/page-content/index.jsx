import React from 'react'
import style from './style.module.less'
const PageContent = ({ children }) => {
  return <div className={style['page-content']}>{children}</div>
}

export default PageContent

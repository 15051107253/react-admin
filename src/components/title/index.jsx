import React from 'react'
import style from './style.module.less'

const Title = ({ children }) => {
  return <div className={style.title}>{children}</div>
}

export default Title

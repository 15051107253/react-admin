import React from 'react'
import { Spin } from 'antd'
import style from './style.module.less'

const LoadingPage = () => {
  return (
    <div className={style['loading-page']}>
      <Spin tip='加载中...' />
    </div>
  )
}

export default LoadingPage

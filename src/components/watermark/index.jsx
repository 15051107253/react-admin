import React, { useLayoutEffect } from 'react'
import style from './style.module.less'

const Watermark = () => {
  useLayoutEffect(() => {
    // 准备做水印
  }, [])

  return <div className={style.watermark} />
}

export default Watermark

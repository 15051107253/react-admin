import React from 'react'
import style from './style.module.less'
const Progress = ({ progressData, total }) => {
  const colors = ['green', 'red', '#888']
  return (
    <div className={style['progress-wrap']}>
      <div className={style.progress}>
        {progressData.map((item, index) => {
          if (item === 0) {
            return ''
          }
          return (
            <div
              key={index}
              style={{
                flex: item,
                backgroundColor: colors[index],
              }}
            >
              {item}
            </div>
          )
        })}
      </div>
      {total && <span className={style.total}>{total}</span>}
    </div>
  )
}

export default Progress

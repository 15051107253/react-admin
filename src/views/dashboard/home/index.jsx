import React, { useState } from 'react'
import { Table, Radio } from 'antd'
import { Title } from '@/components'
import style from './style.module.less'

const DashboardHome = () => {
  const [files, setFiles] = useState([])

  const columns = [
    {
      title: '序号',
      width: 70,
      render(text, row, index) {
        return index + 1
      },
    },
    {
      title: '计划名称',
      dataIndex: 'title',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
    },
    {
      title: '时长',
      dataIndex: 'longTime',
    },
    {
      title: '进度',
      dataIndex: 'process',
    },
  ]

  const dataSource = [
    {
      title: '英语学习',
      startTime: '2021-11-21 16:59:59',
      longTime: 2,
      process: 78,
    },
  ]

  const handleFileChange = (e) => {
    let filesInfo = [...e.target.files]
    setFiles([...files, ...filesInfo])
    e.target.value = null
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <Title>今日计划</Title>
        <Table pagination={false} size='small' dataSource={dataSource} columns={columns} />
      </div>

      <div className={style.card}>
        <Title>文件上传</Title>
        <div className={style.upload}>
          选择文件
          <input type='file' onChange={handleFileChange} multiple />
        </div>
        <ul>
          {files.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </div>
      <Radio.Group onChange={(e) => console.log(e)}>
        <Radio defaultChecked value='A'>
          选项A
        </Radio>
        <Radio value='B'>选项B</Radio>
      </Radio.Group>
      <Radio defaultChecked value='C'>
        选项C
      </Radio>
    </div>
  )
}

export default DashboardHome

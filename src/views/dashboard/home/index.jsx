import React from 'react'
import { Table } from 'antd'
import { Title } from '@/components'
import style from './style.module.less'

const DashboardHome = () => {
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

  return (
    <div className={style.container}>
      <div className={style.card}>
        <Title>今日计划</Title>
        <Table pagination={false} size='small' dataSource={dataSource} columns={columns} />
      </div>
    </div>
  )
}

export default DashboardHome

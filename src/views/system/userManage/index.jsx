import React, { useLayoutEffect, useRef, useState } from 'react'
import { Input, Table } from 'antd'
import { QueryWrapper, FormItem, PageContent } from '@/components'

const UserManage = () => {
  const tableRef = useRef()
  const [tableHeight, setTableHeight] = useState(0)

  const columns = [
    {
      title: '序号',
    },
    {
      title: '用户名',
    },
    {
      title: '手机号',
    },
    {
      title: '邮箱',
    },
    {
      title: '地址',
    },
  ]

  const dataSource = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  useLayoutEffect(() => {
    const pageHeight = document.body.offsetHeight
    const { top } = tableRef.current.getBoundingClientRect()
    console.log(pageHeight, tableRef.current.getBoundingClientRect())
    setTableHeight(pageHeight - top - 130)
  }, [tableHeight])

  return (
    <PageContent>
      <QueryWrapper>
        <FormItem label='用户姓名'>
          <Input />
        </FormItem>
        <FormItem label='岗位角色'>
          <Input />
        </FormItem>
        <FormItem label='岗位角色'>
          <Input />
        </FormItem>
        <FormItem label='岗位角色'>
          <Input />
        </FormItem>
        <FormItem label='岗位角色'>
          <Input />
        </FormItem>
        <FormItem label='岗位角色'>
          <Input />
        </FormItem>
      </QueryWrapper>
      <div ref={tableRef} style={{ marginTop: 10, backgroundColor: '#fff' }}>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: 20,
          }}
          scroll={{
            x: 1000,
            y: tableHeight,
          }}
        ></Table>
      </div>
    </PageContent>
  )
}

export default UserManage

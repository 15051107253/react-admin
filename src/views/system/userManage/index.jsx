import React from 'react'
import { Input } from 'antd'
import { QueryWrapper, FormItem, PageContent } from '@/components'

const UserManage = () => {
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
    </PageContent>
  )
}

export default UserManage

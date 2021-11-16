import React from 'react'
import { Form } from 'antd'

const FormItem = ({ children, ...props }) => {
  return <Form.Item {...props}>{children}</Form.Item>
}

export default FormItem

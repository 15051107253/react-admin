import React from 'react'
import { Form, Row, Col, Button, Space } from 'antd'
import style from './style.module.less'

const QueryWrapper = ({ colSpan = 4, children }) => {
  console.log(children)
  let j = -1,
    newChildren = []
  for (let i = 0; i < children.length; i++) {
    if (i % colSpan === 0) {
      newChildren.push([children[i]])
      j++
    } else {
      newChildren[j].push(children[i])
    }
  }
  console.log(newChildren)
  return (
    <div className={style['query-wrapper']}>
      <Form>
        {newChildren.map((row, rowIndex) => (
          <Row key={rowIndex} gutter={24}>
            {row.map((col, colIndex) => (
              <Col span={24 / colSpan} key={colIndex}>
                {col}
              </Col>
            ))}
          </Row>
        ))}
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Space>
              <Button type='primary' htmlType='submit'>
                查询
              </Button>
              <Button>重置</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default QueryWrapper

import React, { useState } from 'react'
import { Button, List, Input } from 'antd'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import style from './style.module.less'

const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      name: 123213123,
    },
  ],
})

const Login = () => {
  const todoList = useRecoilValue(todoListState)
  const setTodoList = useSetRecoilState(todoListState)
  const [inputValue, setInputValue] = useState('')
  const handleAdd = () => {
    setTodoList((oldList) => [
      ...oldList,
      {
        name: inputValue,
      },
    ])
    setInputValue('')
  }
  return (
    <div>
      <h1>login</h1>
      <div className={style.content}>
        <List
          dataSource={todoList}
          renderItem={(item) => {
            return <List.Item>{item.name}</List.Item>
          }}
        />
        <div style={{ display: 'flex' }}>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button type='primary' onClick={handleAdd}>
            add
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login

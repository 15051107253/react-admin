import React, { useState } from 'react'
import { Button, Input, Checkbox, message } from 'antd'
import { useHistory } from 'react-router-dom'
import style from './style.module.less'

const Login = () => {
  const history = useHistory()

  const [isLoginSucces, setIsLoginSucces] = useState(false)

  const handleLogin = () => {
    setIsLoginSucces(true)
    setTimeout(() => {
      const isSuccess = Math.random().toFixed(1) > 0.5
      console.log(isSuccess)
      if (isSuccess) {
        history.push('/')
      } else {
        message.error('登录失败，请稍候再试！')
        setIsLoginSucces(false)
      }
    }, [2000])
  }

  return (
    <div className={style['login-container']}>
      <div className={style['login-wrapper']}>
        <form>
          <div className={style['login-item']}>
            <h1 className={style.title}>LOGIN</h1>
          </div>
          <div className={style['login-item']}>
            <div className={style['input-wrap']}>
              <label className={style['login-label']} htmlFor='username'>
                账号
              </label>
              <Input id='username' placeholder='请输入账号' className={style['login-input']} />
            </div>
          </div>
          <div className={style['login-item']}>
            <div className={style['input-wrap']}>
              <label className={style['login-label']} htmlFor='password'>
                密码
              </label>
              <Input type='password' id='password' placeholder='请输入密码' className={style['login-input']} />
            </div>
          </div>
          <div className={style['login-item']}>
            <Checkbox>记住密码</Checkbox>
          </div>
          <div className={style['login-item']}>
            <Button size='large' loading={isLoginSucces} block type='primary' onClick={handleLogin}>
              登录
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

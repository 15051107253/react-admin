import { Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { RecoilRoot } from 'recoil'
import AppLayout from './views/layout'
import Login from './views/login'
import Wrapper from './views/wrapper'
import './App.less'
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RecoilRoot>
        <div id='app'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/wrapper' component={Wrapper} />
            <Route path='/' component={AppLayout} />
          </Switch>
        </div>
      </RecoilRoot>
    </ConfigProvider>
  )
}
export default App

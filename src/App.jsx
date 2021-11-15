import { Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import AppLayout from './views/layout'
import Login from './views/login'
import Wrapper from './views/wrapper'
import './App.less'
function App() {
  return (
    <RecoilRoot>
      <div id='app'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/wrapper' component={Wrapper} />
          <Route path='/' component={AppLayout} />
        </Switch>
      </div>
    </RecoilRoot>
  )
}
export default App

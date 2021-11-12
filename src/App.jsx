import { useReducer } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AppLayout from './views/layout'
import Login from './views/login'
import Wrapper from './views/wrapper'
import { GlobalContext } from './store/context'
import { globalStore } from './store'
import './App.less'
function App() {
  return (
    <GlobalContext.Provider value={globalStore}>
      <div id='app'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/wrapper' component={Wrapper} />
          <Route path='/' component={AppLayout} />
        </Switch>
      </div>
    </GlobalContext.Provider>
  )
}
export default App

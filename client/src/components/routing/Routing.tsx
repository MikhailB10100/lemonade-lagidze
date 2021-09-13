import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@pages/Home'
import Admin from '@pages/Admin'
import LoginForm from '@components/loginform/LoginForm'

function Routing() {
  const [auth, setAuth] = useState<boolean>(false)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/admin">
          {auth ? <Admin setAuth={setAuth} /> : <LoginForm setAuth={setAuth} />}
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing

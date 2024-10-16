import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Login, Register, Home } from '../../pages';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>
  )
}

export default Routes
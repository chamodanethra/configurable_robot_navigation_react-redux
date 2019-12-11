import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import Notfound from './notfound'
import App from './App'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            RoboTable
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" render={(props) => <App {...props} clickedSettings={false} />} />
        <Route exact path="/settings" render={(props) => <App {...props} clickedSettings={true} />}/>
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
import React, { Component } from 'react'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import './App.css'

import Notfound from './notfound'
import Container from './Container'



class App extends Component {
  render() {
    return (
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
            <Route exact path="/" render={(props) => <Container {...props} clickedSettings={false} />} />
            <Route exact path="/settings" render={(props) => <Container {...props} clickedSettings={true} />}/>
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
      )
    }
  }

  export default App;
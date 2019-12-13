import React, { Component } from 'react'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css'

import Notfound from './notfound'
import Container from './Container'



class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              {
                this.props.isClicked ?
                  <div className="active">
                    RoboTable
                  </div> 
                :
                  <NavLink exact activeClassName="active" to="/">
                    RoboTable
                  </NavLink>
              }
            </li>
            <li>
              {
                this.props.isClicked ?
                  <div>
                    Settings
                  </div> 
                :
                  <NavLink activeClassName="active" to="/settings">
                    Settings
                  </NavLink>
              }
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

  const mapStateToProps = (state) => {
    return { 
      isClicked: state.isClicked,
    };
  }

  export default connect(mapStateToProps)(App);
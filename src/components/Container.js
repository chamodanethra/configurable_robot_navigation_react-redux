import React, { Component } from 'react';
import './Container.css';
import RoboTable from './RoboTable';
import Settings from './Settings';

class  Container extends Component {

  constructor({ clickedSettings }) {
    super();
    this.state = {
      clickedSettings: clickedSettings,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.clickedSettings !== nextProps.clickedSettings) {
      return ({ clickedSettings: nextProps.clickedSettings }); // <- this is setState equivalent
    } else {
        return null;
    }
  }

  render(){
    return (
     this.state.clickedSettings ?
     <Settings />
    :
    <RoboTable />
    );
  }
}

export default Container;

import React, { Component } from 'react';
import './App.css';
import RoboTable from './RoboTable';
import Settings from './Settings';


class  App extends Component {

  constructor({ clickedSettings }) {
    super();
    this.state = {
      size: 20,
      colourHex: '#0f0',
      clickedSettings: clickedSettings,
    }
  }

  onColourUpdate = (colourHex) => {
    //console.log('colourHex ',colourHex);
    this.setState({ colourHex: `${colourHex}`});
  }

  onSizeUpdate = (value) => {
    //console.log('size ',value);
    this.setState({ size: value});
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
     <Settings onColourUpdate={ this.onColourUpdate } onSizeUpdate={ this.onSizeUpdate } colourHex={ this.state.colourHex } size={ this.state.size } />
    :
    <RoboTable rows={ this.state.size } columns={ this.state.size } colourHex={ this.state.colourHex } />
    );
  }
}

export default App;

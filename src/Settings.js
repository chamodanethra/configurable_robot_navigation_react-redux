import React, { Component } from 'react';
import ColourPicker from './ColourPicker';

class  Settings extends Component {

  constructor({ onColourUpdate, onSizeUpdate, colourHex, size }) {
    super();
    this.onColourUpdate = onColourUpdate;
    this.onSizeUpdate = onSizeUpdate;
    this.state = {
      size: size,
      colourHex: colourHex,
    }
  }

  onColourSelect = (colourHex) => {
    this.setState({colourHex: colourHex});
    this.onColourUpdate(colourHex);
  }

  onSizeChange = (event) => {
    this.setState({size: parseInt(event.target.value)});
    this.onSizeUpdate(parseInt(event.target.value));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.size !== nextProps.size) {
      return ({ size: nextProps.size }); // <- this is setState equivalent
    } else {
        return null;
    }
  }

  render() {
    return (
      <div>
          <ColourPicker onColourPick={ this.onColourSelect } pickedColour={ this.state.colourHex }/>
          <select value={ `${this.state.size}` } onChange={ this.onSizeChange } >
            <option value="10">10 X 10</option> 
            <option value="15">15 X 15</option>
            <option value="20">20 X 20</option>
            <option value="25">25 X 25</option>
          </select>
      </div>
    );
  }
}

export default Settings;

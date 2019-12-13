import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

import { selectColourHex } from '../actions';

class ColourPicker extends Component {
  constructor(props){
      super();
      this.state = {
        selectedColourHex: props.selectColourHex,
      }
  }

  handleChangeComplete = (color) => {
    this.props.selectColourHex(color.hex);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.selectedColourHex !== nextProps.selectedColourHex) {
      //console.log("asdfgh");
      return ({ selectedColourHex: nextProps.selectedColourHex }); // <- this is setState equivalent
    } else {
        return null;
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   return (this.props.selectedColourHex !== nextProps.selectedColourHex);
  // }

  render() {
    return (
      <SketchPicker
        color={ this.props.selectedColourHex }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    selectedColourHex: state.selectedColourHex,
   };
}

export default connect(mapStateToProps, { selectColourHex })(ColourPicker);
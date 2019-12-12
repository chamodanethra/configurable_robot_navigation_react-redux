import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

import { selectColourHex } from '../actions';

class ColourPicker extends Component {
  constructor(props){
      super();
  }

  handleChangeComplete = (color) => {
    this.props.selectColourHex(color.hex);
  };

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
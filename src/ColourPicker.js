import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class ColourPicker extends Component {
  constructor({ onColourPick, pickedColour }){
      super();
        this.state = {
            pickedColour: pickedColour,
        };
        this.onColourPick = onColourPick;
  }

  handleChangeComplete = (color) => {
    this.setState({ pickedColour: color.hex });
    this.onColourPick(color.hex);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.pickedColour !== nextProps.pickedColour) {
      return ({ pickedColour: nextProps.pickedColour }); // <- this is setState equivalent
    } else {
        return null;
    }
  }

  render() {
    return (
      <SketchPicker
        color={ this.state.pickedColour }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default ColourPicker;
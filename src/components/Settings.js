import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColourPicker from './ColourPicker';
import { selectGridSize } from '../actions';

class  Settings extends Component {

  constructor(props) {
    super();
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.selectedGridSize !== nextProps.selectedGridSize) {
  //     return ({ selectedGridSize: nextProps.selectedGridSize }); // <- this is setState equivalent
  //   } else {
  //       return null;
  //   }
  // }
  
  renderList(){
    return this.props.gridSizes.map ((size) => {
      let displaySize = `${size} X ${size}`
      return (
        <option key={`${size}`} value={`${size}`}>{displaySize}</option> 
      )
    })
  }

  render() {
    return (
      <div>
          <ColourPicker />
          <select value={ `${this.props.selectedGridSize}` } onChange={(event) => this.props.selectGridSize(event.target.value) } >
            {this.renderList()}
          </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    gridSizes: state.gridSizes,
    selectedGridSize: state.selectedGridSize,
   };
}

export default connect(mapStateToProps, { selectGridSize })(Settings);

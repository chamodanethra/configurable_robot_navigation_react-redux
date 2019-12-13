import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RoboTable.css';
import * as algorithm from '../algorithms/astar';
import { clickOnGridCell } from '../actions/index'

class RoboTable extends Component {

    constructor(props) {
        super();
        const { selectedGridSize } = props;
        this.state = {
            coordinateY: selectedGridSize - 1,
            coordinateX: 0,
            transitionCount: 0,
        };
        this.isClicked = false;
        this.path = [];
        this.graph = this.makeArray(selectedGridSize, selectedGridSize);
        this.randomInitializeArray();
    }

    randomInitializeArray() {
        for (let i = 0; i < this.graph.length; i++) {
          for (let j = 0; j < this.graph.length; j++) {
            this.graph[i][j] = Math.random() > 0.2 ? 1 : 0;            
          }
          this.graph[this.graph.length - 1][0] = 1;
        }
    }

    makeArray(d1, d2) {
      var arr = [];
      for(let i = 0; i < d2; i++) {
          arr.push(new Array(d1));
      }
      return arr;
  }

    onClickCell = (newCoordinateY, newCoordinateX) => {
      if (!this.isClicked) {
        this.isClicked = true;
        this.props.clickOnGridCell(true);
        setTimeout(this.initializeAlgorithm(newCoordinateY, newCoordinateX), 151);
      }
    }

    initializeAlgorithm(newCoordinateY, newCoordinateX) {
      this.path = [];
      if (this.state.transitionCount === 0 && this.graph[newCoordinateY][newCoordinateX] === 1) {
        let previousCoordinateX = this.state.coordinateX;
        let previousCoordinateY = this.state.coordinateY;

        let graphDataStructure = new algorithm.Graph(this.graph);
        var start = graphDataStructure.grid[previousCoordinateY][previousCoordinateX];
        var end = graphDataStructure.grid[newCoordinateY][newCoordinateX];
        
        var result = algorithm.astar.search(graphDataStructure, start, end);
        this.path = result;

        if (result.length !== 0) {
          this.setState({
            coordinateY: this.path[0].x,
            coordinateX: this.path[0].y,
            transitionCount: this.state.transitionCount + 1,
          });
        } else {
          this.isClicked = false;
          this.props.clickOnGridCell(false);
        }
      }
    }

    componentDidUpdate(){
       if (this.state.transitionCount !== 0) {
         if (this.state.transitionCount < this.path.length) {
            this.timerID = setTimeout(
              () => this.continueTransition(),
              150
            );
         } else {
           this.isClicked = false;
            this.props.clickOnGridCell(false);
            this.setState({transitionCount: 0});
         }
       }
     }

     continueTransition(){
        this.setState({
          coordinateY: this.path[this.state.transitionCount].x,
          coordinateX: this.path[this.state.transitionCount].y,
          transitionCount: this.state.transitionCount + 1,
        });
     }

    render(){
        let rows = [];
        for (let i = 0; i < this.props.selectedGridSize; i++){
          let rowID = `row${i}`
          let cell = []
          for (let idx = 0; idx < this.props.selectedGridSize; idx++){
            let cellID = `cell${i}-${idx}`
            if (this.state.coordinateY === i && this.state.coordinateX === idx) {
                cell.push(<td key={cellID} id={cellID} className="robo" style={{backgroundColor: `${this.props.selectedColourHex}`}}> </td>)
            } else {
              if (this.graph[i][idx] === 1) {
                cell.push(!this.isClicked ? 
                  <td key={cellID} id={cellID} className="unclickedSquare" onClick={(e) => this.onClickCell(i, idx, e)}> </td>
                :
                <td key={cellID} id={cellID} className="clickedSquare" onClick={(e) => this.onClickCell(i, idx, e)}> </td>
                )
              } else {
                cell.push(<td key={cellID} id={cellID} className="barrier" > </td>)
              }
            }
          }
          rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        return(
          <div className="grid-container">
            <table id="simple-board">
                <tbody>
                  {rows}
                </tbody>
            </table>
          </div>
        )
    }
  }

  const mapStateToProps = (state) => {
    return { 
      selectedGridSize: state.selectedGridSize,
      selectedColourHex: state.selectedColourHex,
    };
  }

export default connect(mapStateToProps, { clickOnGridCell })(RoboTable);
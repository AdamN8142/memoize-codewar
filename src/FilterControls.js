import React, { Component } from 'react'
import CardContainer from './CardContainer';
import './FilterControls.css';


class FilterControls extends Component {
  constructor() {
    super();
    this.state = {
      chosenCategory: ""
    }
  }

  setButtontToState = (event) => {
    this.setState({
      chosenCategory: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="controls-container">
          <button className="button" id="lvl-1-btn" value="8 kyu" onClick={this.setButtontToState}>Level 1</button>
          <button className="button" id="lvl-2-btn" value="7 kyu" onClick={this.setButtontToState}>Level 2</button>
          <button className="button" id="lvl-3-btn"  value="6 kyu"onClick={this.setButtontToState}>Level 3</button>
          <button className="button" id="completed-btn"  value="completed"onClick={this.setButtontToState}>Completed</button>
        </div>
          <CardContainer data={this.props.data} />
      </div>
    )
  }
}


export default FilterControls;
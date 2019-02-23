import React, { Component } from 'react'
import './FilterControls.css';


class FilterControls extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="controls-container">
        <button className="button" id="lvl-1-btn">Level 1</button>
        <button className="button" id="lvl-2-btn">Level 2</button>
        <button className="button" id="lvl-3-btn">Level 3</button>
        <button className="button" id="completed-btn">Completed</button>
      </div>
    )
  }
}


export default FilterControls;
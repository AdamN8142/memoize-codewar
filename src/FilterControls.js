import React, { Component } from 'react'
import CardContainer from './CardContainer';



class FilterControls extends Component {
  constructor() {
    super();
    this.state = {
      chosenCategory: "",
      completed: []
    }
  }

  filteredCategories = () => {
    let filteredCats = this.props.data.filter((codeWar) => {
      if (codeWar.level === this.state.chosenCategory && !codeWar.addedToStorage) {
        return codeWar
      } else if (this.state.chosenCategory === 'completed' && codeWar.addedToStorage) {
        return codeWar
      }
    })
    return filteredCats
  }
  
    setButtonToState = (event) => {
      this.setState({
        chosenCategory: event.target.value
      }, this.filteredCategories)
    }
  
 
  render() {
    return (
      <div>
        <div className="controls-container">
          <button className="button" id="lvl-1-btn" value="8 kyu" onClick={this.setButtonToState}>Level 1</button>
          <button className="button" id="lvl-2-btn" value="7 kyu" onClick={this.setButtonToState}>Level 2</button>
          <button className="button" id="lvl-3-btn" value="6 kyu" onClick={this.setButtonToState}>Level 3</button>
          <button className="button" id="completed-btn" value="completed" onClick={this.setButtonToState}>Completed</button>
        </div>
          <CardContainer toggleComplete={this.props.toggleComplete} data={this.props.data} filteredCategories={this.filteredCategories()} filteredCompleted={this.filterCompleted} />
      </div>
    )
  }
}


export default FilterControls;
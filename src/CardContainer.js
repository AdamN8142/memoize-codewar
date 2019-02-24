import React, { Component } from 'react';
import Card from './Card'
import './CardContainer.css'


class CardContainer extends Component {
  constructor() {
    super();
    this.state =({
      
    })
  }

  showFilteredCategories = () => {
    let filtered = this.props.filteredCategories.map((codeWar)=> {
      return <Card toggleComplete={this.props.toggleComplete} key={codeWar.id} codeWar={codeWar} completed={this.props.completed}/>
    })
    return filtered
  }


  render() {
    return (
      <div className="bottom-page">
        <div className="card-container">
          {this.showFilteredCategories()}
        </div>
      </div>
    )
  }
}


//add the object to local storage on click
//map over array im saving to local storage 
export default CardContainer;
import React, { Component } from 'react';
import Card from './Card'



class CardContainer extends Component {
  constructor() {
    super();
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


export default CardContainer;
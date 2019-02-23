import React, { Component } from 'react';
import Card from './Card'
import './CardContainer.css'


class CardContainer extends Component {
  constructor() {
    super();
  }

  showFilteredCategories = () => {
    let filtered = this.props.filteredCategories.map((codeWar)=> {
      return <article className="individual-card">
          <h3>{codeWar.name}</h3>
          <h4>{codeWar.prompt}</h4>
          <p>{codeWar.level}</p>
          <p>{codeWar.type}</p>
          <a>{codeWar.replLink}</a>
        </article>
    })
    return filtered
  }

  render() {
    return (
      <div>
        <div className="card-container">
          {this.showFilteredCategories()}
        </div>
      </div>
    )
  }
}


export default CardContainer;
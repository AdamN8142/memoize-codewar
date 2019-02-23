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
        <h3 className="card-name">{codeWar.name}</h3>
          <div className="level-and-category">
            <p className="card-category">Category: {codeWar.type}</p>
            <p className="card-level">Level: {codeWar.level}</p>
          </div>
          <div className="link">
            <a href={codeWar.replLink} target="_blank" className="repl-link">{codeWar.replLink}</a>
          </div>
          <h4 className="card-prompt">{codeWar.prompt}</h4>
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
import React, { Component } from 'react';
import Card from './Card'
import './CardContainer.css'


class CardContainer extends Component {
  constructor() {
    super();
    this.state =({
      expanded: false
    })
  }

  showFilteredCategories = () => {
    let filtered = this.props.filteredCategories.map((codeWar)=> {

      return <article className="individual-card">
        <h3 className="card-name">{codeWar.name}</h3>
          <div className="level-and-category">
            <p className="card-category">Category : {codeWar.type}</p>
            <p className="card-level">Level : {codeWar.level}</p>
          </div>
          <div className="link">
            <a href={codeWar.replLink} target="_blank" className="repl-link">{codeWar.name} - REPL Link </a>
          </div>
          <h4 className="card-prompt">{codeWar.prompt}</h4>
          <div className="card-buttons-container">
            <button className="card-button" className="see-solution-btn"onClick={this.toggleCard}>See the Solution</button>
            <button className="card-button" className="save-to-storage-btn" onClick={this.addToCompleted}>Mark as Completed!</button>
          </div>
        </article>

    })
    return filtered
  }

  addToCompleted = (event) => {
    this.addedToStorage = true 
  }

  toggleCard = (event) => {
    this.setState =({
      expanded: !this.state.expanded
    })
    //Is this what i even want to do? I donnt watn to set the state of the whole card container, just the card 
    //Should i make a card component iteslf? 
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
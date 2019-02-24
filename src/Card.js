import React, { Component } from 'react';
import CardContainer from './CardContainer';

class Card extends Component {
  constructor() {
    super();
  }

  toggleCompletedProperty = (event) => {
    this.props.toggleComplete(this.props.codeWar.id)
  }


  render() {
    return (
      <div>
        <article className="individual-card">
        <h3 className="card-name">{this.props.codeWar.name}</h3>
          <div className="level-and-category">
            <p className="card-category">Category : {this.props.codeWar.type}</p>
            <p className="card-level">Level : {this.props.codeWar.level}</p>
          </div>
          <div className="link">
            <a href={this.props.codeWar.replLink} target="_blank" className="repl-link">{this.props.codeWar.name} - REPL Link </a>
          </div>
          <h4 className="card-prompt">{this.props.codeWar.prompt}</h4>
          <div className="card-buttons-container">
            <button className="card-button" className="see-solution-btn"onClick={this.toggleCard}>See the Solution</button>
            {!this.props.codeWar.addedToStorage && <button className="card-button" className="save-to-storage-btn" onClick={this.toggleCompletedProperty}>Mark as Completed!</button>}
            {this.props.codeWar.addedToStorage && <button className="card-button" className="save-to-storage-btn" onClick={this.toggleCompletedProperty}>Remove from Completed!</button>}

          </div>
        </article>
      </div>
    )
  }
}

export default Card;
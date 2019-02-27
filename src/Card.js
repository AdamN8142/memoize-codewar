import React, { Component } from 'react';
import CardContainer from './CardContainer';


class Card extends Component {
  constructor() {
    super();
    this.state = {
      toggledSolution : false
    }
  }

  toggleCompletedProperty = (event) => {
    this.props.toggleComplete(this.props.codeWar.id)
  }

  toggleSolution = () => {
    this.setState({
      toggledSolution: !this.state.toggledSolution
    })
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
            {!this.props.codeWar.addedToStorage && <button className="card-button" className="save-to-storage-btn" onClick={this.toggleCompletedProperty}>Mark as Completed!</button>}
            {this.props.codeWar.addedToStorage && <button className="card-button" className="save-to-storage-btn" onClick={this.toggleCompletedProperty}>Remove from Completed!</button>}
            {!this.state.toggledSolution && <button className="card-button" className="see-solution-btn"onClick={this.toggleSolution}>See Solution</button>}
            {this.state.toggledSolution && <button className="card-button" className="see-solution-btn"onClick={this.toggleSolution}>Hide Solution</button>}
          </div>
            {this.state.toggledSolution && <img className="solution-image" src={`../CodewarSolutions/${this.props.codeWar.id}.png`} />}
        </article>
      </div>
    )
  }
}

export default Card;


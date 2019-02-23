import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <h1 className="title-header">CodeWar Wins</h1>
      </div>
    )
  }
}

export default Header;
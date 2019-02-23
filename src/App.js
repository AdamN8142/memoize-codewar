import React, { Component } from 'react';
import FilterControls from './FilterControls'
import Header from './Header'
import dataSet from './dataSet'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dataSet.codeWars
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FilterControls  data={this.state.data}/>
        

      </div>
    );
  }
}

export default App;

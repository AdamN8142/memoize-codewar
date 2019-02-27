import React, { Component } from 'react';
import FilterControls from './FilterControls'
import Header from './Header'


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      completed: []
    }
  }

  toggleComplete = (id) => {
    let updatedData = this.state.data.map((card) => {
      if (card.id === id) {
        card.addedToStorage = !card.addedToStorage;
      }
        return card
    })
    let updatedCompletedArr = updatedData.filter( card => card.addedToStorage).map(card=> card.id)
    this.setState({
      data: updatedData, 
      completed: updatedCompletedArr
    }, this.setLocalStorage)
  }

    setLocalStorage = () => {
      localStorage.setItem('completed', JSON.stringify(this.state.completed))
  }

  getLocalStorage = () => {
    if(localStorage.getItem('completed')){
      let storage = JSON.parse(localStorage.getItem('completed'))
      let updatedData =this.state.data.map((card) => {
        if(storage.includes(card.id)) {
          card.addedToStorage = true;
        }
          return card
      })
      this.setState({
        data: updatedData,
        completed:storage
      })
    } 
  }
    
  componentDidMount = () => {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/ANdata")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.ANdata
        }, () => this.getLocalStorage())
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  render() {
        return (
          <div className="app">
            <Header />
            <FilterControls 
              data={this.state.data} 
              toggleComplete={this.toggleComplete} 
              completed={this.state.completed}/>
          </div>
        )
    }
}


export default App;

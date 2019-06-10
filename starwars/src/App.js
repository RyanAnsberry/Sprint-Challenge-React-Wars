import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList.js'
import PageSelector from './components/PageSelector.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPageURL: '',
      prevPageURL: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  nextClickHandler = event => {
    if(this.state.nextPageURL){
      this.getCharacters(`${this.state.nextPageURL}`);
    }
  }
  
  prevClickHandler = event => {
    if(this.state.prevPageURL){
      this.getCharacters(`${this.state.prevPageURL}`);
    }
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, nextPageURL: data.next, prevPageURL: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <PageSelector  nextClickHandler={this.nextClickHandler}  prevClickHandler={this.prevClickHandler} />
        <CharacterList starwarsChars={this.state.starwarsChars}/>
        <PageSelector  nextClickHandler={this.nextClickHandler}  prevClickHandler={this.prevClickHandler} />
        <footer></footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/yelp.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  };

  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(
      businesses => this.setState({
        businesses : businesses
      })
    );
    console.log("Searching Yelp with " + term +", " +location +", " +sortBy);
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp = {this.searchYelp}/>
        <BusinessList  businesses = {this.state.businesses}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import LocationInput from './components/LocationInput'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <LocationInput value="tezt"/>
        </div>
      );
  }
}

export default App;

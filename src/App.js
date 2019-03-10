import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SelectionContainer from './components/SelectionContainer'

import ResultComponent from './components/ResultComponent'


class App extends Component {
  constructor(){
    super()

    this.state={
      enableBody: false,
      records : []
    }
  }
  showResults = (data)=>{
    this.setState({enableBody: true})
    this.setState({records: data})
  }
  render() {
    return (
        <div>
          <Header/>
          <SelectionContainer success={this.showResults}/>
          {(this.state.enableBody) ? <ResultComponent  data={this.state.records}/> : "" }
        </div>
      );
  }
}

export default App;

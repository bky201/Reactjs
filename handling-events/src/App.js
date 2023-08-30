import React, { Component } from 'react';
import './App.css';
import NestingComponents from './components/NestingComponents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NestingComponents />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunction from './components/ConditionalRenderingFunction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConditionalRenderingClass />
        <ConditionalRenderingFunction connected={true}/>
      </div>
    );
  }
}

export default App;

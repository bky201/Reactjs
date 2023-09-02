import React, { Component } from 'react';
import './App.css';
import HTTPRequests from './components/HTTPRequests';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HTTPRequests />
      </div>
    );
  }
}

export default App;

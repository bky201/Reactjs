import React, { Component } from 'react';
import './App.css';
import Httprequests from './components/Httprequests';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Httprequests />
      </div>
    );
  }
}

export default App;

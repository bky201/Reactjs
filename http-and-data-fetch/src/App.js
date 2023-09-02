import React, { Component } from 'react';
import './App.css';
// import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HTTPRequests /> */}
        <HTTPPost />
      </div>
    );
  }
}

export default App;

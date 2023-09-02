import React, { Component } from 'react';
import './App.css';
// import HTTPRequests from './components/HTTPRequests';
// import HTTPPost from './components/HTTPPost';
// import HTTPHooks from './components/HTTPHooks';
import HTTPPostHooks from './components/HTTPPostHooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HTTPRequests /> */}
        {/* <HTTPPost /> */}
        {/* <HTTPHooks /> */}
        <HTTPPostHooks />
      </div>
    );
  }
}

export default App;

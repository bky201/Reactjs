import React, { Component } from 'react';
import './App.css';
// import Clock from './components/Clock';
// import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Clock /> */}
        {/* <LifeCyclesCDM /> */}
        <LifeCyclesCDU />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
// import Clock from './components/Clock';
import LifeCyclesCDM from './components/LifeCyclesCDM';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Clock /> */}
        <LifeCyclesCDM />
      </div>
    );
  }
}

export default App;

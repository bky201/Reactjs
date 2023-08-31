import React, { Component } from 'react';
import './App.css';
// import Clock from './components/Clock';
// import LifeCyclesCDM from './components/LifeCyclesCDM';
// import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Clock /> */}
        {/* <LifeCyclesCDM /> */}
        {/* <LifeCyclesCDU /> */}
        <LifeCyclesCWU />
      </div>
    );
  }
}

export default App;

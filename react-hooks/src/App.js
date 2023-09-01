import React, { Component } from 'react';
import './App.css';
// import ControlledFormHooks from './components/ControlledFormHooks';
// import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ControlledFormHooks /> */}
        {/* <UseStateWithArrays /> */}
        <UseStateWithObjects />
      </div>
    );
  }
}

export default App;

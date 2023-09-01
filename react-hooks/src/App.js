import React, { Component } from 'react';
import './App.css';
// import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ControlledFormHooks /> */}
        <UseStateWithArrays />
      </div>
    );
  }
}

export default App;

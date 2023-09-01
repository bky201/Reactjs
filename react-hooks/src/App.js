import React, { Component } from 'react';
import './App.css';
// import ControlledFormHooks from './components/ControlledFormHooks';
// import UseStateWithArrays from './components/UseStateWithArrays';
// import UseStateWithObjects from './components/UseStateWithObjects';
// import ClassCounter from './components/ClassCounter';
// import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterOnlyOnce from './components/UseEffectCounterOnlyOnce';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ControlledFormHooks /> */}
        {/* <UseStateWithArrays /> */}
        {/* <UseStateWithObjects /> */}
        {/* <ClassCounter /> */}
        {/* <UseEffectCounter /> */}
        <UseEffectCounterOnlyOnce />
      </div>
    );
  }
}

export default App;

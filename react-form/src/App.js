import React, { Component } from 'react';
import './App.css';
// import UncontrolledForm from './components/UncontrolledForm';
// import { SearchBar2 } from "./components/SearchBar2";
import { SearchBar3 } from "./components/SearchBar3";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UncontrolledForm /> */}
        <SearchBar3 />
      </div>
    );
  }
}

export default App;

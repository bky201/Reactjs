import React, { Component } from 'react';
import './App.css';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventsFunctional />
        <EventsClass />
      </div>
    );
  }
}

export default App;

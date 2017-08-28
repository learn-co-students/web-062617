import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FunctionalComponent, SomeOtherComponent } from './components/FunctionalComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FunctionalComponent/>
        </div>
        <p className="App-intro">
          <SomeOtherComponent/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

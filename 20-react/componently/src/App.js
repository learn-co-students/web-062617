import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'
import EmptyState from './EmptyState'
import BooksContainer from './Container/BooksContainer'


class App extends Component {

  state = {
    inputValue: "",
  }

  render() {

    return (
      <div className="App">
        <BooksContainer beef="Steak" />
        <input type="text" onChange={this.handleChange} value={this.state.inputValue} />

      </div>
    );
  }


}

export default App;

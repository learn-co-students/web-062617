import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'
import EmptyState from './EmptyState'

class App extends Component {


  state = {
    inputValue: ""
  }

  componentDidMount() {
    console.log("App did Mount")
  }

  componentWillMount() {
    console.log("App will Mount")
  }


  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

  }

  render() {
    console.log("Rendering")

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
        <input type="submit" value="Submit"/>
      </form>
      { this.state.inputValue.length > 0 ? <Container {...this.state}/> : <EmptyState/>}

    </div>
    )
  }
}

export default App;

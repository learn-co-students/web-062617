import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import UltraTest from './UltraTest'
import NavBar from './NavBar'
import { Link, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (

      <div className="App">

        <Route path="/" component={NavBar} />
        <Route exact path="/racecars" render={() => <Test><UltraTest/></Test>} />
        <Route path="/beef" component={Test}/>
        <Route path="/racecars/:id" component={UltraTest} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <p className="App-intro">
          <a href="/test">Test</a>


        </p>
        <Link to="/new_test">New Test</Link>







      </div>

    );
  }
}

export default App;

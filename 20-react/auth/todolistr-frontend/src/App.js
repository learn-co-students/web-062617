import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './adapters/auth'
import LoginForm from './components/LoginForm'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: false
  }


  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        })
        localStorage.setItem('jwt', user.jwt)
      })
  }


  handleButtonClick = () => {
    Auth.me().then(user => {
      console.log(user)

    })

  }

  render() {
    console.log(this.state)
    return (
      <div>
        { localStorage.getItem('jwt') ? null : <Redirect to="/login"/>   }
        <Route path="/login" render={() => <LoginForm onLogin={this.loginUser}/> }/>
      </div>
    );
  }
}

export default App;

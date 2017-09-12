import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'


import './App.css';
import Auth from './adapters/auth'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import testHOC from './components/hocs/testHOC'
import authorize from './components/hocs/authorize'



class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    jwt: localStorage.getItem("jwt")
  }


  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          currentUser: user,
          isLoggedIn: true
        })

      })
  }


  handleButtonClick = () => {
    Auth.me().then(user => {
      console.log(user)

    })

  }




  render() {
    const AuthHome = authorize(Home)
    return (
      <div>
        <div>
          <Route path="/home" component={AuthHome}/>
          <Route path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
        </div>
      </div>
    );
  }
}

export default App;

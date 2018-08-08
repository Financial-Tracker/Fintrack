import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './Component/Forms/LogIn'
import SignUp from './Component/Forms/SignUp'
import HomePage from './Component/HomePage'
// import HomePage from './Component/Pages /FirstPage'
import {HashRouter, Link, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path = "/" component = {LogIn} />
          <Route exact path = "/login" component = {LogIn} />
          <Route exact path = "/signup" component = {SignUp} />
          <Route exact path = "/homepage" component = {HomePage} />

        </div>
      </HashRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LogIn from "./Component/Forms/LogIn";
import SignUp from "./Component/Forms/SignUp";
import HomePage from "./Component/HomePage";
// import HomePage from './Component/Pages /FirstPage'
import { HashRouter, Link, Route } from "react-router-dom";
import { auth } from "./Firebase";
import firebase from "firebase";
import { withAuth } from "fireview";
import HomepageLayout from "./Component/Pages/HomepageHeading";
import Plaid from "./Component/Pages/Plaid";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />

          
          {this.props._user ? (
            <Route exact path="/plaid" component={Plaid} />
          ) : (
            <Route exact path="/" component={LogIn} />
          )}

          {this.props._user ? (
            <Route exact path="/homepage" component={HomepageLayout} />
          ) : (
            <Route exact path="/" component={LogIn} />
          )}
        </div>
      </HashRouter>
    );
  }
}

export default withAuth(App);

import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import LogIn from "./Component/Forms/LogIn";
import SignUp from "./Component/Forms/SignUp";
// import HomePage from './Component/Pages /FirstPage'
import { HashRouter, Route } from "react-router-dom";
import { withAuth } from "fireview";
import HomepageLayout from "./Component/Pages/HomepageHeading";
import Plaid from "./Component/Pages/Plaid";
<<<<<<< HEAD
import store from "./Store";
import BankPage from "./Component/Pages/BankPage";
=======
import store from './Store'
import BankCard from './Component/BankInfo/BankCard'
>>>>>>> master

class App extends Component {
  render() {
    return (
      // <BankPage />
      <Provider store={store}>
<<<<<<< HEAD
        <HashRouter>
          <div className="App">
=======
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path = "/bankInfo" component = {BankCard}/>

          
          {this.props._user ? (
            <Route exact path="/plaid" component={Plaid} />
          ) : (
>>>>>>> master
            <Route exact path="/" component={LogIn} />
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
      </Provider>
    );
  }
}

export default withAuth(App);

import React, { Component } from "react";
import { Provider } from 'react-redux'
import "./App.css";
import LogIn from "./Component/Forms/LogIn";
import SignUp from "./Component/Forms/SignUp";
import HomePage from './Component/HomePage'
import { HashRouter, Route, Switch } from "react-router-dom";
import { withAuth } from "fireview";
// import HomepageLayout from "./Component/Pages/HomepageHeading";
import Plaid from "./Component/Pages/Plaid";
import store from './Store'
import BankHomePage from './Component/BankInfo/BankHomePage'
import Balance from './Component/BankInfo/BalanceInfo'
import SingleBalance from "./Component/BankInfo/SingleBalance"
import Income from './Component/BankInfo/Income'
import Nav from './Component/Forms/Navbar'

// import MyComponent from './Component/Forms/Test'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
        
        <div className="App">
        <Nav />
          {this.props._user ? (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/plaid" component={Plaid} />
              <Route exact path = "/bankInfo" component = {BankHomePage}/>
              <Route exact path = "/balance" component = {Balance} />
              <Route exact path = "/balance/:id" component = {SingleBalance} />
              <Route exact path = "/income" component = {Income} />
              <Route exact path = "/homepage" component = {HomePage} />
            </Switch>
          ) : (
            <Switch>

              <Route  path="/" component={LogIn} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          )}
        </div>
      </HashRouter>
      </Provider>
    );
  }
}



export default withAuth(App);
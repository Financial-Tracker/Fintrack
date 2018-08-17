import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import LogIn from "./Component/Forms/LogIn";
import SignUp from "./Component/Forms/SignUp";
import HomePage from "./Component/HomePage";
import { HashRouter, Route, Switch } from "react-router-dom";
import { withAuth } from "fireview";
import Plaid from "./Component/Pages/Plaid";
import store from "./Store";
// import BankHomePage from "./Component/BankInfo/BankHomePage";
// import Balance from "./Component/BankInfo/BalanceInfo";
// import SingleBalance from "./Component/BankInfo/SingleBalance";
// import Income from "./Component/BankInfo/Income";
// import TransactionTable from "./Component/BankInfo/TransactionTable";
// import BankPage from "./Component/Pages/BankPage";
// New Components imports 
import Nav from "./Component/Forms/Navbar";
import AddAccount from './allComponents/AddAccount'
import Balance from './allComponents/Balance'
import Budgets from './allComponents/Budgets'
import Goals from './allComponents/Goals'
import Income from './allComponents/Income'
import Overview from './allComponents/Overview'
import Profile from './allComponents/Profile'
import Settings from './allComponents/Settings'
import Transactions from './allComponents/Transactions'
import WaysToSave from './allComponents/WaysToSave'
import Bills from './allComponents/Bills'
import TransactionTable from "./Component/BankInfo/TransactionTable";
import EditProfile from './allComponents/EditProfile'


// import Budgets from "./Component/BankInfo/Budgets";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>

      <div className='contanier'>
        <div className='nav'>
          <Nav/>
        </div>
        <div className='contant '>
        {
            this.props._user ? 
            <Switch>
              <Route exact path="/!" component={Overview} />
              <Route exact path="/" component={Overview} />
              <Route exact path="/homepage" component={Overview} />
              <Route exact path='/overview' component={Overview} />
              <Route exact path="/plaid" component={Plaid} />
              <Route exact path="/balance" component={Balance} />
              <Route exact path='/income' component={Income} />
              <Route exact path='/account' component={AddAccount} />
              <Route exact path='/budgets' component={Budgets} />
              <Route exact path='/goals' component={Goals} />
              <Route exact path='/profile' component={Profile} />   
              <Route exact path='/settings' component={Settings} />   
              <Route exact path='/transaction' component={Transactions} />  
              <Route exact path='/saves' component={WaysToSave} />
              <Route exact path='/bills' component={Bills} />
              <Route exact path='/editprofile' component={EditProfile} />
            </Switch>
            
            : 
            <Switch>
            <Route exact path="/!" component={LogIn} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={LogIn} />
          </Switch>
          } 

        </div>
      </div>


        {/* <div className="App">
        <Nav />
          {
            this.props._user ? 
            <Switch>
              <Route exact path="/!" component={Overview} />
              <Route exact path="/" component={Overview} />
              <Route exact path="/homepage" component={Overview} />
              <Route exact path='/overview' component={Overview} />
              <Route exact path="/plaid" component={Plaid} />
              <Route exact path="/balance" component={Balance} />
              <Route exact path='/income' component={Income} />
              <Route exact path='/account' component={AddAccount} />
              <Route exact path='/budgets' component={Budgets} />
              <Route exact path='/goals' component={Goals} />
              <Route exact path='/profile' component={Profile} />   
              <Route exact path='/settings' component={Settings} />   
              <Route exact path='/transaction' component={Transactions} />  
              <Route exact path='/saves' component={WaysToSave} />
              <Route exact path='/bills' component={Bills} />
            </Switch>
            
            : 
            <Switch>
            <Route exact path="/!" component={LogIn} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={LogIn} />
          </Switch>
          } */}



          {/* {this.props._user ? (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/plaid" component={Plaid} />
              <Route exact path = "/bankInfo" component = {BankHomePage}/>
              <Route exact path = "/balance" component = {Balance} />
              <Route exact path = "/balance/:id" component = {SingleBalance} />
              <Route exact path = "/income" component = {Income} />
              <Route exact path = "/homepage" component = {HomePage} />
              <Route exact path = "/transactiontable" component = {TransactionTable} />
              <Route exact path = "/bankpage" component = {BankPage} />


            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={LogIn} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          )} */}
          {/* <Bills /> */}
        {/* </div> */}
      </HashRouter>
      </Provider>
    );
  }
}

export default withAuth(App);

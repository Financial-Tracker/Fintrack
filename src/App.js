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
import {connect} from 'react-redux'

// import BankHomePage from "./Component/BankInfo/BankHomePage";
// import Balance from "./Component/BankInfo/BalanceInfo";
// import SingleBalance from "./Component/BankInfo/SingleBalance";
// import Income from "./Component/BankInfo/Income";
// import TransactionTable from "./Component/BankInfo/TransactionTable";
// import BankPage from "./Component/Pages/BankPage";


// import Nav from "./allComponents/smallComponents/Navbar";
// import AddAccount from './allComponents/AddAccount'
// import Balance from './allComponents/Balance'
// import Budgets from './allComponents/BudgetPage'
// import Goals from './allComponents/GoalPage'
// import Income from './allComponents/Income'
// import Profile from './allComponents/Profile'
// import Settings from './allComponents/Settings'
// import WaysToSave from './allComponents/WaysToSavePage'
// import Bills from './allComponents/Bills'
// import TransactionTable from "./Component/BankInfo/TransactionTable";
// import BudgetBeta from './Component/BankInfo/Budgets'
// import Budgets from "./Component/BankInfo/Budgets";

//----------------------------------------------------------------------------------------------------------
//new imports
import BudgetPage from "./allComponents/BudgetPage";
import OverviewPage from "./allComponents/OverviewPage";
import TransactionPage from "./allComponents/TransactionPage";
import GoalPage from "./allComponents/GoalPage";
import WaysToSavePage from "./allComponents/WaysToSavePage";
import UserSettingPage from "./allComponents/UserSettingPage";
import EditGoal from "./allComponents/EditGoal";
import BillForm from "./allComponents/smallComponents/BillForm";
import GoalForm from "./allComponents/smallComponents/GoalForm";
import BillPage from './allComponents/BillPage'

import BankLogInButton from './allComponents/smallComponents/BankLogInButton'
import {getDataFromFireStore} from './Store/plaidContainer'
//----------------------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    this.props.getDataFromFireStore()

  }
  render() {
    console.log(this.props)
    return (
        <div>
          <HashRouter >
            {!this.props._user ? (
              <Switch>
                {/* {!this.props._user ? (null) : (null) } */}
                {/* Login and sign up  */}
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route component={LogIn} />
              </Switch>
            ) : (
              <Switch>
                {
                  this.props.store.plaidContainer.plaidData? 
                  (
                  <div>
                <Route exact path="/" component={OverviewPage} />
                <Route exact path="/plaid" component={Plaid} />
                <Route exact path="/transactions" component={TransactionPage} />
                <Route exact path="/budget" component={BudgetPage} />
                <Route exact path="/goal" component={GoalPage} />
                <Route exact path="/waystosave" component={WaysToSavePage} />
                <Route exact path="/settings" component={UserSettingPage} />
                <Route exact path={`/editgoal/:Id`} component={EditGoal} />
                <Route exact path={'/bills'} component={BillPage} />
                {/* <Route component={OverviewPage} /> */}
                    </div>
                  )
                  
                  : 
                  
                  (
                    <Route component={BankLogInButton} />
                  )
                }
                {/* once the user is logged in */}

              </Switch>
            )}
          </HashRouter>
          <BillForm />
          <GoalForm />
        </div>
    );
  }
}
const MapStateToprops = state => (
  {
    store : state
  }
)

const MapDispatchToProps = dispatch => ({
  getDataFromFireStore : () => dispatch(getDataFromFireStore())
})


App = connect(MapStateToprops, MapDispatchToProps)(withAuth(App))


class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Main;
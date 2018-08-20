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
import GoalForm from ".//allComponents/smallComponents/GoalForm";

//----------------------------------------------------------------------------------------------------------

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div>
          <HashRouter>
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
                {/* once the user is logged in */}
                <Route exact path="/" component={OverviewPage} />
                <Route exact path="/plaid" component={Plaid} />
                <Route exact path="/transactions" component={TransactionPage} />
                <Route exact path="/budget" component={BudgetPage} />
                <Route exact path="/goal" component={GoalPage} />
                <Route exact path="/waystosave" component={WaysToSavePage} />
                <Route exact path="/settings" component={UserSettingPage} />
                <Route exact path={`/editgoal/:Id`} component={EditGoal} />
                <Route component={OverviewPage} />
              </Switch>
            )}
          </HashRouter>
          <BillForm />
          <GoalForm />
        </div>

      </Provider>
    );
  }
}

export default withAuth(App);

//       <Provider store={store}>
//       <HashRouter>

//         <div>
//         <div>
//           <Nav />
//         </div>

//         <div className='contant'>
//         {
//   this.props._user ?
//   <Switch>
//     <Route exact path="/!" component={Overview} />
//     <Route exact path="/" component={Overview} />
//     <Route exact path="/homepage" component={Overview} />
//     <Route exact path='/overview' component={Overview} />
//     <Route exact path="/plaid" component={Plaid} />
//     <Route exact path="/balance" component={Balance} />
//     <Route exact path='/income' component={Income} />
//     <Route exact path='/account' component={AddAccount} />
//     <Route exact path='/budgets' component={Budgets} />
//     <Route exact path='/goals' component={Goals} />
//     <Route exact path='/profile' component={Profile} />
//     <Route exact path='/settings' component={Settings} />
//     <Route exact path='/transaction' component={Transactions} />
//     <Route exact path='/saves' component={WaysToSave} />
//     <Route exact path='/bills' component={Bills} />
//   </Switch>


//   : 

//   :

//   <Switch>
//   <Route exact path="/!" component={LogIn} />
//   <Route exact path="/login" component={LogIn} />
//   <Route exact path="/signup" component={SignUp} />
//   <Route component={LogIn} />
// </Switch>
// }
//         </div>
//         </div>
//       </HashRouter>
//       </Provider>

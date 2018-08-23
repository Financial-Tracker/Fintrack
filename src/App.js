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

//----------------------------------------------------------------------------------------------------------
//new imports
//smallcomponents
import Navbar from './allComponents/smallComponents/Navbar'
import Footer from './allComponents/smallComponents/Footer'
import SideNav from './allComponents/smallComponents/SideNav'
//smallcomponents
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
import EditBill from './allComponents/EditBill';
import BankLogInButton from './allComponents/smallComponents/BankLogInButton'
import {getDataFromFireStore} from './Store/plaidContainer'

//styling imports

//----------------------------------------------------------------------------------------------------------

class App extends Component {
  constructor(props){
    super(props)

  }
  async componentDidMount(){
    await this.props.getDataFromFireStore()
    // await this.props.getUserData()
  }
  render() {
    // console.log(this.props._user)
    // console.log(this.props.store.plaidContainer.plaidData ? this.props.store.plaidContainer.plaidData.auth ? 'yes data from plaid and user is logged in' : 'no data but user is logged in' : 'no data from plaid' )
    // console.log(this.props.store.plaidContainer.plaidData)
    // console.log(this.props.store.plaidContainer.isLoading ? 'Loading' : 'Finish')
    return (
        <div>

          <HashRouter >
            {!this.props._user ? (
              <Switch>
                {/* {!this.props._user ? (null) : (null) } */}
                {/* Login and sign up  */}
                <Route exact path='/' component={LogIn} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route component={LogIn} />
              </Switch>
            ) : (
              <div>
                <div>
              <Route component={Navbar}/>
              <section id="main">
                <div className="container">
                <div className='row'>
                < Route component={SideNav}/>
                <div className="col-md-9"> 
                {
                  this.props.store.plaidContainer.plaidData ? 
                  (
                <Switch>
                <Route exact path="/" component={OverviewPage} />
                <Route exact path="/plaid" component={Plaid} />
                <Route exact path="/transactions" component={TransactionPage} />
                <Route exact path="/budget" component={BudgetPage} />
                <Route exact path="/goal" component={GoalPage} />
                <Route exact path="/waystosave" component={WaysToSavePage} />
                <Route exact path="/settings" component={UserSettingPage} />
                <Route exact path={`/editgoal/:Id`} component={EditGoal} />
                <Route exact path={'/bills'} component={BillPage} />
                <Route exact path={`/editbill/:Id`} component={EditBill} />
                </Switch>
                  
                  )
                  : 
                  
                  (
                    <Route component={BankLogInButton} />
                  )
                }
                </div>
                </div>
                </div>
                </section>
                {this.props.store.plaidContainer.isLoading ? (<div id="loader"></div>) : null }
                <Route  component={Footer} />
                </div>
                </div>
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
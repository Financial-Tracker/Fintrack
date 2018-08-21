import React, { Component } from "react";
import NavBar from "./smallComponents/Navbar";
import SideNav from "./smallComponents/SideNav";
import Transactions from "./smallComponents/Transactions";
import GoalForm from "./smallComponents/GoalForm";
import AccountOverViewSection from "./smallComponents/AccountOverViewSection";
import Footer from "./smallComponents/Footer";
import { withAuth } from "fireview";


import { connect } from "react-redux";
import { getPlaid, getDataFromFireStore } from "../Store/plaidContainer";
// import AddAccount from './AddAccount'

const getAccountTotal = (data) => {
  let total = 0
  if(data){
    data.forEach((account)=> {
      total += (account.balances.current)
    })
    return '$ ' + total
  }else {
    return 'Loading'
  }
}


class OverviewPage extends Component {

  componentDidMount() {
    // this.props.getDataFromFireStore()
    console.log(this.props._user)
  }
  render() {
  let AccountTotal = getAccountTotal(this.props.plaidInfo.auth);
  let goals = this.props.plaidInfo.Goals ? this.props.plaidInfo.Goals.length : 0
  let transactions = this.props.plaidInfo.transaction ? this.props.plaidInfo.transaction.length : 'Loading';
  let budgets = this.props.plaidInfo.budget ? '$ '+ this.props.plaidInfo.budget : '$0'
    return (
      <div>
        <NavBar />
        <section id="main">
          <div className="container">
            <div className="row">
              <SideNav />
              <div className="col-md-9">
                {this.props.plaidInfo.auth ? <AccountOverViewSection accountTotal={AccountTotal} budgets={budgets} transactions={transactions} goals={goals}/>: null}
                <Transactions />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
} 

const MapStateToProps = state => ({
  plaidInfo: state.plaidContainer
});

const MapDispatchToProps = dispatch => ({
  getDataFromFireStore: () => dispatch(getDataFromFireStore())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(OverviewPage);

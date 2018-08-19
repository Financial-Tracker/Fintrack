import React, { Component } from "react";
// import BudgetPage from "../Component/BankInfo/Budgets";

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import GoalForm from './smallComponents/GoalForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'
export default class BudgetPage extends Component {
  render() {
    return (
      <div>
      <NavBar link={'Budget'}/>
    <section id="main">
      <div className="container">
        <div className="row">
      <SideNav link={'Budget'}/>
          <div className="col-md-9">
          This is budget page
            {/* <AccountOverViewSection />
            <Transactions /> */}
          </div>
        </div>
      </div>
    </section>
    <Footer />    
    
</div>
    );
  }
}

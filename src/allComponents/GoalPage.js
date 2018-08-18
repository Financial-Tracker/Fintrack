import React, { Component } from 'react'

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import ModalsForm from './smallComponents/ModalsForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'

export default class GoalPage extends Component {
  render() {
    return (
      <div>
      <NavBar link={'Goals'}/>
    <section id="main">
      <div className="container">
        <div className="row">
      <SideNav link={'Goals'}/>
          <div className="col-md-9">
          This is goal page
            {/* <AccountOverViewSection />
            <Transactions /> */}
          </div>
        </div>
      </div>
    </section>
    <Footer />    
    <ModalsForm />
      </div>
    )
  }
}

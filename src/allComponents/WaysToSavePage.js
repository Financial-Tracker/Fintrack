import React, { Component } from 'react'

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import ModalsForm from './smallComponents/ModalsForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'

export default class WaysToSavePage extends Component {
  render() {
    return (
      <div>
      <NavBar link={'Ways to save'}/>
    <section id="main">
      <div className="container">
        <div className="row">
      <SideNav link={'Ways to save'}/>
          <div className="col-md-9">
          This is ways to save
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

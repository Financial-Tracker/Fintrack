import React, { Component } from 'react'
import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import ModalsForm from './smallComponents/ModalsForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'

// import {connect} from 'react-redux'
// import {getPlaid,getDataFromFireStore} from '../Store/plaidContainer'
// import AddAccount from './AddAccount'


export default class OverviewPage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      <section id="main">
        <div className="container">
          <div className="row">
        <SideNav />
            <div className="col-md-9">
              <AccountOverViewSection />
              <Transactions />
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

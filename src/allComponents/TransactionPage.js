import React, { Component } from 'react'

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import ModalsForm from './smallComponents/ModalsForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'
// import PieChart from './smallComponents/PieChart'


export default class TransactionPage extends Component {
  render() {
    return (
        <div>
        <NavBar link={'Transactions'}/>
      <section id="main">
        <div className="container">
          <div className="row">
        <SideNav link={'Transactions'}/>
            <div className="col-md-9">
            <h2 className='row center'>Transaction Table</h2>
              {/* <AccountOverViewSection /> */}
              {/* <PieChart /> */}
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

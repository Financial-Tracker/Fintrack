import React, { Component } from 'react'
import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import ModalsForm from './smallComponents/ModalsForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';

// import {connect} from 'react-redux'
// import {getPlaid,getDataFromFireStore} from '../Store/plaidContainer'
// import AddAccount from './AddAccount'


export default class Overview extends Component {
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
  
      <footer id="footer">
        <p>Copyright FinTrack, &copy; 2018</p>
      </footer>
      <ModalsForm />
  </div>
    
    )
  }
}

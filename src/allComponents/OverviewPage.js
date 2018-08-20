import React, { Component } from 'react'
import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import GoalForm from './smallComponents/GoalForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'

import {connect} from 'react-redux'
import {getDataFromFireStore} from '../Store/plaidContainer'
// import AddAccount from './AddAccount'




 class OverviewPage extends Component {
   componentDidMount(){
    this.props.getDataFromFireStore()
   }
   render() {
    console.log(this.props.plaidInfo)
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
  </div>
    
    )
  }
}

const MapStateToProps = state => ({
  plaidInfo : state.plaidContainer
})

const MapDispatchToProps = dispatch => ({
  getDataFromFireStore : () => dispatch(getDataFromFireStore())
})

export default connect(MapStateToProps,MapDispatchToProps)(OverviewPage)
import React, { Component } from 'react'

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import ModalsForm from './smallComponents/ModalsForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'
import GoalsList from './smallComponents/GoalsList'
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
          <div>
          <h1 className='center'>Goals</h1> 
          </div>
            <GoalsList />
          <button data-toggle="modal" data-target="#addPage" className="btn btn-lg btn-primary main-color-bg center">Add A Goal</button>
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

import React, { Component } from 'react'

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import GoalForm from './smallComponents/GoalForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'
import GoalsList from './smallComponents/GoalsList'

export default class GoalPage extends Component {
  render() {
    return (
          <div>
          <div>
          <h1 className='center'>Goals</h1> 
          </div>
            <GoalsList />
          <button data-toggle="modal" data-target="#addGoalForm" className="btn btn-lg btn-primary main-color-bg center">Add A Goal</button>
          </div>
    )
  }
}

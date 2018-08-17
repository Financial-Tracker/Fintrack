import React, { Component } from 'react'
import HomepageLayout from '../Component/Pages/HomepageHeading'
import {connect} from 'react-redux'
import {withAuth} from 'fireview'

import CardBalance from '../Component/BankInfo/CardBalance'

//Css imports
require('./Styling/addAccount.css')
const anmination = 'animated zoomIn delay-2s'
class AddAccount extends Component {
  componentDidMount() {

    console.log(this.props.plaidObj)
  }

        
  render() {
    return (


      <div className='addAccount-container'>
      {
        this.props.plaidObj.isLoading ? <h1>Loading..</h1> : <div className='addAccount-container'>{
        !this.props.plaidObj.auth ? 
        
        <HomepageLayout />
        
        : 
        <div className='addAccount'>
        <div className={`addAccount-header ${anmination}`}>
          <h1 className='addAccount-header-text '>Over view</h1>
        </div>
        <div className={`addAccountAccounts ${anmination}`}>
          <CardBalance />
        </div>
        <div className={`addAccount-linegraph-pie  ${anmination}`}>
        <div className={`addAccount-linegraph ${anmination}`}>
        linegraph
        </div>
        <div className={`addAccount-pie ${anmination}`}>
            pie Charts
        </div>
        </div>
        <div className={`addAccount-Bills-Goals ${anmination}`}>
        Upcoming Bills and Goals
        </div>
        <div className={`addAccount-transaction-tb ${anmination}`}>
          Transactions table
        </div>
      </div>
        
        
        }</div>
      }
      




      </div>
    )
  }
}

const mapState =(state)=>{
  return{
      plaidObj: state.plaidContainer
  }
}


export default connect(mapState)(withAuth(AddAccount))

import React, { Component } from 'react'
import HomepageLayout from '../Component/Pages/HomepageHeading'
import {connect} from 'react-redux'
import {withAuth} from 'fireview'

import Balance from '../Component/BankInfo/BalanceInfo'
// import TransactionTable from '../Component/BankInfo/TransactionTable'
import { Grid, Image } from 'semantic-ui-react'

//Css imports
// require('./Styling/addAccount.css')
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
          <h1 className='addAccount-header-text '>OVER VIEW </h1>
        </div>
        <div className={`addAccountAccounts ${anmination}`}>
        <h3>
          Accounts
        </h3>
        <h1 />
          <Balance />
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
        <div className={`addAccount-transaction-tb center ${anmination}`}>
        <h3 >
          Transaction
        </h3>
          {/* <TransactionTable /> */}
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

import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import {connect} from 'react-redux'
// import TransactionTable from '../Component/BankInfo/TransactionTable'
import {getPlaid,getDataFromFireStore} from '../../Store/plaidContainer'
import BankLogInButton from './BankLogInButton'

class Transactions extends Component {
  componentDidMount(){
    this.props.getDataFromFireStore()
  }
  getSingleBalance(accountId){
    for(let i =0;i<this.props.plaidInfo.balance.length; i++){
        if(this.props.plaidInfo.balance[i].account_id=== accountId){
            return this.props.plaidInfo.balance[i].name
        }
    }
} 
  tableRows(){
    if(this.props.plaidInfo.auth) {
      let finalArr = []
      console.log("at rows:",this.props.plaidInfo.transaction)
      for(let i = 0; i<this.props.plaidInfo.transaction.length; i++){
        let obj = {}
        obj.name = this.props.plaidInfo.transaction[i].name
        obj.category = this.props.plaidInfo.transaction[i].category[0]
        obj.amount = this.props.plaidInfo.transaction[i].amount.toString()
        obj.account = this.getSingleBalance(this.props.plaidInfo.transaction[i].account_id)
        finalArr.push(obj)
      } 
    console.log('FINALARR: ', finalArr)
    return finalArr
    }
  }
  render() {
    console.log(this.props.plaidInfo)
    let Datarows = []
    {this.props.plaidInfo.isLoading === false?console.log('loading'): Datarows =this.tableRows()}
    let data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Category',
          field: 'category',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Amount',
          field: 'amount',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Account',
          field: 'account',
          sort: 'asc',
          width: 100
        }
      ]
    };


    data = {...data, rows: Datarows}

    console.log('FINALE TABLE: ', data)
  
    return (
      
      <div>
        { this.props.plaidInfo.transaction
        ?(<MDBDataTable
        maxHeight="200px"
        responsive
        striped
        bordered
        hover
        data={data}
        />) : <div><BankLogInButton/></div>}
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

export default connect(MapStateToProps, MapDispatchToProps)(Transactions)
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPlaid,getDataFromFireStore} from '../Store/plaidContainer'
import AddAccount from './AddAccount'
require('./Styling/addAccount.css')
export default class Overview extends Component {
  render() {
    return (
      <div className='addAccount-container'>
        <AddAccount />
      </div>
    )
  }
}

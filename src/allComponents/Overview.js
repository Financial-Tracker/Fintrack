import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPlaid,getDataFromFireStore} from '../Store/plaidContainer'
export default class Overview extends Component {
  render() {
    return (
      <div>
        <h1>This is the over view</h1>
      </div>
    )
  }
}

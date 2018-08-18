import React, { Component } from 'react'

// import TransactionTable from '../Component/BankInfo/TransactionTable'

export default class Transactions extends Component {
  render() {
    return (
      <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Latest Transactions</h3>
      </div>
      <div className="panel-body">
        <table className="table table-striped table-hover">
        <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
            </tr>
            <tr>
              <td>Jill Smith</td>
              <td>jillsmith@gmail.com</td>
              <td>Dec 12, 2016</td>
            </tr>
            <tr>
              <td>Eve Jackson</td>
              <td>ejackson@yahoo.com</td>
              <td>Dec 13, 2016</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>jdoe@gmail.com</td>
              <td>Dec 13, 2016</td>
            </tr>
            <tr>
              <td>Stephanie Landon</td>
              <td>landon@yahoo.com</td>
              <td>Dec 14, 2016</td>
            </tr>
            <tr>
              <td>Mike Johnson</td>
              <td>mjohnson@gmail.com</td>
              <td>Dec 15, 2016</td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>
    )
  }
}

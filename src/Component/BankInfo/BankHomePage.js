import React, { Component } from 'react'
import {connect} from 'react-redux'
import {LineChart} from 'react-easy-chart';
import account from '../dummyData/account'
import transaction from '../dummyData/transactions'
import { getPlaid, getDataFromFireStore } from '../../Store/plaidContainer'
import 
    {
    Table,
} from 'react-materialize'
require('./account.css')

class BankHomePage extends Component {

  componentDidMount() {
    // this.props.getPlaid(this.props.plaidObj)
    this.props.getFireStore()
  }

  render() {
    console.log(transaction,account)
    return (
      <div>
        <div className='container'>
       
          <div>
          <LineChart
    xType={'time'}
    axes
    grid
    verticalGrid
    interpolate={'cardinal'}
    width={750}
    height={250}
    data={[
      [
        { x: '1-Jan-15', y: 20 },
        { x: '1-Feb-15', y: 10 },
        { x: '1-Mar-15', y: 33 },
        { x: '1-Apr-15', y: 45 },
        { x: '1-May-15', y: 15 }
      ], [
        { x: '1-Jan-15', y: 10 },
        { x: '1-Feb-15', y: 15 },
        { x: '1-Mar-15', y: 13 },
        { x: '1-Apr-15', y: 15 },
        { x: '1-May-15', y: 10 }
      ]
    ]}
  />
          </div>
        </div>
      <div className='container'>
          <Table>
  <thead>
    <tr>
      <th data-field="id">Location</th>
      <th data-field="name">Category</th>
      <th data-field="price">Amount</th>
    </tr>
  </thead>

  <tbody>
          {
          transaction.map((info,index)=>{
            if(index < 9){
              return (
                <tr key={index}>
                <td>{info.name}</td>
                <td>{info.category[0]}</td>
                <td>{info.amount}</td>
              </tr>
              )
            }
          })
        } 
  </tbody>
</Table>
      </div>
      </div>
    )
  }
}
// class BankHomePage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false
//         }
//     }
//     componentDidMount() {
//         // this.props.getPlaid(this.props.plaidObj)
//         this.props.getFireStore()
//     }
//     render() {
//         return (
//             <div>
//                 {Object.keys(this.props.plaidObj).length!==0? <div><h1>hi</h1></div> : <div></div>}
//             </div>
//         )
//     }
// }

const mapState = (state) => {
    return {
        plaidObj: state.plaidContainer
    }
}
const mapDispatch = (dispatch) => {
    return {
        getPlaid: (data) => dispatch(getPlaid(data)),
        getFireStore: () => dispatch(getDataFromFireStore())
    }
}
export default connect(mapState, mapDispatch)(BankHomePage)
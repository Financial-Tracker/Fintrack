import React, { Component } from 'react'
import { Row, Icon, Input, Button } from 'react-materialize'
import { Header, Image, Modal, Dropdown } from 'semantic-ui-react'
import { getAllBill } from '../Store/BillReducer'
import { connect } from 'react-redux'

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import GoalForm from './smallComponents/GoalForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'

// const typeOfBill = [
//   { key: 'none', text: 'none', value: 'none' },
//   { key: 'bills & utilities ', text: 'bills & utilities', value: 'bills & utilities' },
//   { key: 'Rent', text: 'Rent', value: 'Rent' },
//   { key: 'Medical', text: 'Medical', value: 'Medical' },
//   { key: 'Education', text: 'Education', value: 'Education' },
//   { key: 'Loan', text: 'Loan', value: 'Loan' },
//   { key: 'Day Care', text: 'DayCare', value: 'DayCare' },
//   { key: 'Other', text: 'Other', value: 'Other' },
// ]

// const howOften = [
//   { key: 'none', text: 'none', value: 'none' },
//   { key: 'One time only', text: 'One time only', value: 'One time only' },
//   { key: 'Weekly', text: 'Weekly', value: 'Weekly' },
//   { key: 'Monthly', text: 'Monthly', value: 'Monthly' },
//   { key: 'Quarterly', text: 'Quarterly', value: 'Quarterly' },
//   { key: 'Yearly', text: 'Yearly', value: 'Yearly' },
//   { key: 'Other', text: 'Other', value: 'Other' },
// ]

class BillPage extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      bill: '',
      typeOfBill: '',
      amountDue: '',
      howOften: '',
      date: '',
      paid: false
    }
  }
  async componentDidMount() {
    await this.props.getAllBill()
  }

  onSubmitHandler = (evt) => {
    // evt.preventDefault()
    console.log(this.state)
  }

  //this is handler dropdown
  onChangeHandlerDrop = (evt, data) => {
    this.setState({
      [data.name]: data.value
    })
  }
  //handler for text
  onChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  onChangeDate = (e, value) => {
    this.setState({
      date: value
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })


  render() {
    const bills = this.props.allBills
    return (
      <div>
        <NavBar link={'Bills'} />
        <section id="main">
          <div className="container">
            <div className="row">
              <SideNav link={"Bills"} />
              <div className="col-md-9">
                <div className="panel panel-default">
                  <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Bills</h3>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      {/* <div className="col-md-12">
                    <input className="form-control" type="text" placeholder="Filter Posts..." />
                </div> */}
                    </div>
                    <br />
                    <table className="table table-striped table-hover">
                      {
                        bills ?
                          (<tbody >
                            <tr>
                              <th>Bill</th>
                              <th>Amount Due</th>
                              <th>Recurring</th>
                              <th>How Often</th>
                              <th>End Date</th>
                              <th></th>
                            </tr>
                            { bills.map((bill, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{bill.billTitle}</td>
                                    <td>$ {bill.howMuch}</td>
                                    <td>{bill.howMuch? 'True' : 'False'}</td>
                                    <td>{bill.howOften}</td>
                                    <td>{bill.endDate}</td>
                                    <td><a className="btn main-color-bg" onClick={this.paidHandler}>Paid</a><a className="btn btn-default" href={`#/editbill/${index}`} onClick={this.editHandler}>Edit</a></td>
                                  </tr>)
                              })
                            }
                          </tbody>)
                          :
                          (<tbody >
                            <tr>
                              <th>Goal</th>
                              <th>How Much?</th>
                              <th>Monthly Savings</th>
                              <th>Created</th>
                              <th>End Date</th>
                              <th></th>
                            </tr>
                            {/* <h4>You currently have no goals.</h4> */}
                          </tbody>)}

                    </table>
                    <button data-toggle="modal" data-target="#addBillForm" className="btn btn-lg btn-primary main-color-bg center">Add A Bill</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />

      </div>
    )
  }
}



const mapState =(state)=>{
  return{
    isLoading:state.plaidContainer.isLoading,
      plaidObj: state.plaidContainer.plaidData

  }
}
const mapDispatch = (dispatch) => {
  return {
    getAllBill: () => dispatch(getAllBill())
  }
}

export default connect(mapState, mapDispatch)(BillPage)
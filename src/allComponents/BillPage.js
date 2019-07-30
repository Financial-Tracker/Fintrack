import React, { Component } from "react";
import { getAllBill, payBill, deleteBill } from "../Store/BillReducer";
import { connect } from "react-redux";

import NavBar from "./smallComponents/Navbar";
import SideNav from "./smallComponents/SideNav";
import Footer from "./smallComponents/Footer";

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
    super();
    this.state = {
      modalOpen: false,
      bill: "",
      typeOfBill: "",
      amountDue: "",
      howOften: "",
      date: "",
      paid: false
    };
  }
  async componentDidMount() {
    await this.props.getAllBill();
  }

  //this is handler dropdown
  onChangeHandlerDrop = (evt, data) => {
    this.setState({
      [data.name]: data.value
    });
  };
  //handler for text
  onChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  onChangeDate = (e, value) => {
    this.setState({
      date: value
    });
  };
  paidHandler = index => {
    this.props.pay(index);
  };
  deletePaidBill = index => {
    this.props.delete(index);
  };
  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const bills = this.props.allBills;
    const paid = this.props.paidBills;
    // console.log("allBills: ", this.props.allBills);
    // console.log("paidBills: ", this.props.paidBills);
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <h3 className="panel-title">Pending Bills</h3>
          </div>

          <div className="panel-body">
            <div className="row" />

            <table className="table table-striped table-hover">
              {bills && bills.length ? (
                <tbody>
                  <tr>
                    <th>Bill</th>
                    <th>Amount Due</th>
                    <th>Recurring</th>
                    <th>How Often</th>
                    <th>End Date</th>
                    <th />
                  </tr>
                  {bills.map((bill, index) => {
                    return (
                      <tr key={index}>
                        <td>{bill.billTitle}</td>
                        <td>$ {bill.howMuch}</td>
                        <td>{bill.howMuch ? "True" : "False"}</td>
                        <td>{bill.howOften}</td>
                        <td>{bill.endDate}</td>
                        <td>
                          <a
                            className="btn main-color-bg"
                            onClick={() => this.paidHandler(index)}
                          >
                            Paid
                          </a>
                          <a
                            className="btn btn-default"
                            href={`#/editbill/${index}`}
                            onClick={this.editHandler}
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <th>Bill</th>
                    <th>How Much?</th>
                    <th>Recurring?</th>
                    <th>How Often?</th>
                    <th>End Date</th>
                    <th />
                  </tr>

                  <tr>
                    <td>You currently have no pending bills</td>
                  </tr>
                </tbody>
              )}
            </table>

            <button
              data-toggle="modal"
              data-target="#addBillForm"
              className="btn btn-lg btn-primary main-color-bg center"
            >
              Add A Bill
            </button>

            <div className="spaces"> "" </div>
            <div className="spaces"> "" </div>

            <div>
              <div className="panel-heading main-color-bg">
                <h3 className="panel-title">Paid Bills</h3>
              </div>

              <table className="table table-striped table-hover">
                {paid && paid.length ? (
                  <tbody>
                    <tr>
                      <th>Bill</th>
                      <th>Amount Paid</th>
                      <th>Recurring</th>
                      <th>How Often</th>
                      <th>Paid On</th>
                      <th />
                    </tr>
                    {paid.map((bill, index) => {
                      return (
                        <tr key={index}>
                          <td>{bill.billTitle}</td>
                          <td>$ {bill.howMuch}</td>
                          <td>{bill.howMuch ? "True" : "False"}</td>
                          <td>{bill.howOften}</td>
                          <td>{bill.endDate}</td>
                          <td>
                            <a
                              className="btn main-color-bg"
                              onClick={() => this.deletePaidBill(index)}
                            >
                              Remove
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <th>Bill</th>
                      <th>Amount Paid</th>
                      <th>Recurring</th>
                      <th>How Often</th>
                      <th>Paid On</th>
                      <th />
                    </tr>
                    <tr>
                      <td>You currently have no paid bills!</td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    paidBills: state.bills.paidBills,
    allBills: state.bills.allBills
  };
};
const mapDispatch = dispatch => {
  return {
    getAllBill: () => dispatch(getAllBill()),
    pay: idx => dispatch(payBill(idx)),
    delete: idx => dispatch(deleteBill(idx))
  };
};

export default connect(
  mapState,
  mapDispatch
)(BillPage);

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlaid,
  getDataFromFireStore,
  getTransactionsByCurrentMonth
} from "../../Store/plaidContainer";
class Budgets extends Component {
  componentWillMount() { 
    this.props.getTransactions();
    this.forceUpdate()
  }

  render() { 
    let total
    let transMonthArray;
    let spending
    if(this.props.plaidInfo.transMonth) {
      transMonthArray = this.props.plaidInfo.transMonth
      spending = transMonthArray.map((transaction) => {
        return (transaction.amount)
      })
      const reducer = (accumulator, currentVal) => accumulator + currentVal
      total = spending.reduce(reducer)
    }

    return (
      <React.Fragment>
        {(this.props.plaidInfo.transMonth)?
        (
          <div>
            <h1>Your income is {this.props.plaidInfo.monthlyIncome}</h1>
            <h2>You spent {total} this month</h2>
          </div>
        ) : (
          <h1>No budget data here :(</h1>
        )}
      </React.Fragment>
    );
  }
}
const MapStateToProps = state => ({
  plaidInfo: state.plaidContainer
});
const MapDispatchToProps = dispatch => ({
  getPlaid: data => dispatch(getPlaid(data)),
  getDataFromFireStore: () => dispatch(getDataFromFireStore()),
  getTransactions: () => dispatch(getTransactionsByCurrentMonth())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Budgets);

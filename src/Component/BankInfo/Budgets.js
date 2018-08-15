import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlaid,
  getDataFromFireStore,
  getTransactionsByCurrentMonth
} from "../../Store/plaidContainer";
class Budgets extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTransactions();
    console.log("Transactions: ", this.props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Your income is {}</h1>
        <h2>Your budget is {}</h2>
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

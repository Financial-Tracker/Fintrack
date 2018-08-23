import React, { Component } from "react";
import Budget from "../Component/BankInfo/Budgets";
import { connect } from "react-redux";
import { getDataFromFireStore } from "../Store/plaidContainer";

class BudgetPage extends Component {

  async componentDidMount() {
    await this.props.getPlaidInfo();
  }
  render() {
    return (
      <div>
        <div className="col-md-9">
          <Budget />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  isLoading: state.plaidContainer.isLoading,
  plaidData: state.plaidContainer.plaidData
});
const mapDispatch = dispatch => ({
  getPlaidInfo: () => dispatch(getDataFromFireStore())
});

export default connect(
  mapState,
  mapDispatch
)(BudgetPage);

import React, { Component } from "react";

class Budgets extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>hi</h1>
        <h2>work</h2>
      </React.Fragment>
    );
  }
}
const MapStateToProps = state => ({
  plaidInfo: state.plaidContainer
});
const MapDispatchToProps = dispatch => ({
  getPlaid: data => dispatch(getPlaid(data)),
  getDataFromFireStore: () => dispatch(getDataFromFireStore())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Budgets);

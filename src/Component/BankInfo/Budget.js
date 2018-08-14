import React, { Component } from "react";

class Budget extends Component {
  render() {
    return <div />;
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
)(BankPage);

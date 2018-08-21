import React, { Component } from "react";

export default class AccountOverViewSection extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading main-color-bg">
          <h3 className="panel-title">Account Overview</h3>
        </div>
        <div className="panel-body">
          <div className="col-md-3">
            <div className="well dash-box">
              <h2>
                <span aria-hidden="true" />  {this.props.accountTotal}
              </h2>
              <h4>Account Total</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="well dash-box">
              <h2>
                <span
                  className="glyphicon glyphicon-list-alt"
                  aria-hidden="true"
                />{" "}
                {this.props.transactions}
              </h2>
              <h4>Transactions</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="well dash-box">
              <h2>
                <span className="" aria-hidden="true" />{" "}
                {this.props.budgets}
              </h2>
              <h4>Budgets</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="well dash-box">
              <h2>
                <span className="glyphicon glyphicon-gift" aria-hidden="true" />{" "}
                {this.props.goals}
              </h2>
              <h4>Goals</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

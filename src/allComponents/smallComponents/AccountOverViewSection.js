import React, { Component } from 'react'

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
                <h2><span className="glyphicon glyphicon-floppy-saved" aria-hidden="true"></span> 203</h2>
                <h4>Ways to save</h4>
                </div>
            </div>
            <div className="col-md-3">
                <div className="well dash-box">
                <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> 12</h2>
                <h4>Transactions</h4>
                </div>
            </div>
            <div className="col-md-3">
                <div className="well dash-box">
                <h2><span className="glyphicon glyphicon-usd" aria-hidden="true"></span> 33</h2>
                <h4>Budgets</h4>
                </div>
            </div>
            <div className="col-md-3">
                <div className="well dash-box">
                <h2><span className="glyphicon glyphicon-gift" aria-hidden="true"></span> 334</h2>
                <h4>Goals</h4>
                </div>
            </div>
            </div>
            </div>
    ) 
  } 
}
 
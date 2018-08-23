import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getDataFromFireStore} from '../../Store/plaidContainer'

class SideNav extends Component {

componentDidMount(){
     this.props.getDataFromFireStore()
}
render() {
    console.log("SIDENAV: ", this.props.stateData)
    return (
    <div className="col-md-3">
        <div className="list-group">
        {/* Dashboard */}
        {this.props.link ? (
            <a href="#" className="list-group-item">
            <span
                className="	glyphicon glyphicon-piggy-bank"
                aria-hidden="true"
            />{" "}
            Dashboard
            </a>
        ) : (
            <a href="#" className="list-group-item active main-color-bg">
            <span
                className="	glyphicon glyphicon-piggy-bank"
                aria-hidden="true"
            />{" "}
            Dashboard
            </a>
        )}

                {/* transaction */}
        {this.props.link === 'Transactions' ? 
        <a href="#/transactions" className={`list-group-item active main-color-bg`}>
        <span className="glyphicon glyphicon-list-alt" aria-hidden="true">
        </span> Transactions <span className="badge">
        {this.props.stateData.plaidContainer.plaidData.transaction ? this.props.stateData.plaidContainer.plaidData.transaction.length : 0 }
        
        </span>
        </a>
        : 
        <a href="#/transactions" className={`list-group-item`}>
        <span className="glyphicon glyphicon-list-alt" aria-hidden="true">
        </span> Transactions <span className="badge">
        {this.props.stateData.plaidContainer.plaidData.transaction ? this.props.stateData.plaidContainer.plaidData.transaction.length : 0 }
        
        </span>
        </a>
        }


        
        {/* Budgets */}
        {this.props.link === 'Budget' ? 
        <a href="#/budget" className="list-group-item active main-color-bg"><span className="	glyphicon glyphicon-usd" aria-hidden="true"></span> Budgets <span className="badge">
        $ {this.props.stateData.plaidContainer.plaidData.budget ? this.props.stateData.plaidContainer.plaidData.budget : 0}
        
        </span></a>
        : 
        <a href="#/budget" className="list-group-item"><span className="	glyphicon glyphicon-usd" aria-hidden="true"></span> Budgets <span className="badge">
        $ {this.props.stateData.plaidContainer.plaidData.budget ? this.props.stateData.plaidContainer.plaidData.budget : 0}
     
        </span></a>
        }
    

        {/* Goal */}
        {this.props.link === 'Goals' ? 
        <a href="#/goal" className="list-group-item active main-color-bg"><span className="	glyphicon glyphicon-gift" aria-hidden="true"></span> Goals <span className="badge">
        {this.props.stateData.goals.allGoals ? this.props.stateData.goals.allGoals.length : 0 }
    
        </span></a>
        : 
        <a href="#/goal" className="list-group-item"><span className="	glyphicon glyphicon-gift" aria-hidden="true"></span> Goals <span className="badge">
        {this.props.stateData.goals.allGoals ? this.props.stateData.goals.allGoals.length : 0 }
        
        </span></a>
        }
        

        {/* Bills */}
        {this.props.link === "Bills" ? (
            <a
            href="#/bills"
            className="list-group-item active main-color-bg"
            >
            <span
                className="glyphicon glyphicon glyphicon-tags"
                aria-hidden="true"
            />{" "}
            Bills <span className="badge">{this.props.stateData.bills.allBills.length}</span>
            </a>
        ) : (
            <a href="#/bills" className="list-group-item">
            <span
                className="glyphicon glyphicon glyphicon-tags"
                aria-hidden="true"
            />{" "}
            Bills <span className="badge">{this.props.stateData.bills.allBills.length}</span>
            </a>
        )}
        </div>

        <div className="well">
        <h3>Goals</h3>

        <h5>Goal 1</h5>
        <div className="progress">
            <div
            className="progress-bar main-color-bg"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "60%" }}
            >
            60%
            </div>
        </div>
        <h5>Goal 2 </h5>
        <div className="progress">
            <div
            className="progress-bar main-color-bg"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "40%" }}
            >
            40%
            </div>
        </div>

        <h6>Goal 3 </h6>
        <div className="progress">
            <div
            className="progress-bar main-color-bg"
            role="progressbar"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "45%" }}
            >
            45%
            </div>
        </div>
        </div>

        <div className="well">
        <h4>Bills</h4>
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Date Due</th>
                <th scope="col">Amount</th>
            </tr>
            </thead>
            <tbody>
                {this.props.stateData.bills.allBills.map((bill, index) => {
                    if(index <= 3) {
                        return (
                        <tr>
                            <td>{bill.billTitle}</td>
                            <td>{bill.endDate}</td>
                            <td>${bill.howMuch}</td>
                        </tr>
                        )
                    }
                })}
            </tbody>
        </table>
        </div>
    </div>
    );
}
}

const mapStateToProps = state => {
    return {
        stateData: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDataFromFireStore : () => dispatch(getDataFromFireStore())}
    }



export default connect(mapStateToProps,mapDispatchToProps)(SideNav)
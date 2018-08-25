import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataFromFireStore } from "../../Store/plaidContainer";
import { getAllGoal } from "../../Store/GoalReducer";
import { getAllBill } from "../../Store/BillReducer";

class SideNav extends Component {
  componentDidMount() {
    this.props.getDataFromFireStore();
    this.props.getAllBill();
    this.props.getAllGoals();
  }
  render() {
    let link = this.props.location.pathname.slice(1);

    return (
      <div className="col-md-3">
        <div className="list-group">
          {/* Dashboard */}
          {this.props.location.pathname.slice(1) ? (
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
          {this.props.location.pathname.slice(1) === "transactions" ? (
            <a
              href="#/transactions"
              className={`list-group-item active main-color-bg`}
            >
              <span
                className="glyphicon glyphicon-list-alt"
                aria-hidden="true"
              />{" "}
              Transactions{" "}
              <span className="badge">
                {this.props.stateData.plaidContainer.plaidData.transaction
                  ? this.props.stateData.plaidContainer.plaidData.transaction
                      .length
                  : 0}
              </span>
            </a>
          ) : (
            <a href="#/transactions" className={`list-group-item`}>
              <span
                className="glyphicon glyphicon-list-alt"
                aria-hidden="true"
              />{" "}
              Transactions{" "}
              <span className="badge">
                {this.props.stateData.plaidContainer.plaidData.transaction
                  ? this.props.stateData.plaidContainer.plaidData.transaction
                      .length
                  : 0}
              </span>
            </a>
          )}

          {/* Budgets */}
          {this.props.location.pathname.slice(1) === "budget" ? (
            <a href="#/budget" className="list-group-item active main-color-bg">
              <span className="	glyphicon glyphicon-usd" aria-hidden="true" />{" "}
              Budgets{" "}
              <span className="badge">
                ${" "}
                {this.props.stateData.plaidContainer.plaidData.budget
                  ? this.props.stateData.plaidContainer.plaidData.budget
                  : 0}
              </span>
            </a>
          ) : (
            <a href="#/budget" className="list-group-item">
              <span className="	glyphicon glyphicon-usd" aria-hidden="true" />{" "}
              Budgets{" "}
              <span className="badge">
                ${" "}
                {this.props.stateData.plaidContainer.plaidData.budget
                  ? this.props.stateData.plaidContainer.plaidData.budget
                  : 0}
              </span>
            </a>
          )}

          {/* Goal */}
          {this.props.location.pathname.slice(1) === "goal" ? (
            <a href="#/goal" className="list-group-item active main-color-bg">
              <span className="	glyphicon glyphicon-gift" aria-hidden="true" />{" "}
              Goals{" "}
              <span className="badge">
                {this.props.stateData.goals.allGoals
                  ? this.props.stateData.goals.allGoals.length
                  : 0}
              </span>
            </a>
          ) : (
            <a href="#/goal" className="list-group-item">
              <span className="	glyphicon glyphicon-gift" aria-hidden="true" />{" "}
              Goals{" "}
              <span className="badge">
                {this.props.stateData.goals.allGoals
                  ? this.props.stateData.goals.allGoals.length
                  : 0}
              </span>
            </a>
          )}

          {/* Bills */}
          {this.props.location.pathname.slice(1) === "bills" ? (
            <a href="#/bills" className="list-group-item active main-color-bg">
              <span
                className="glyphicon glyphicon glyphicon-tags"
                aria-hidden="true"
              />{" "}
              Bills{" "}
              {this.props.stateData.bills.allBills ? (
                <span className="badge">
                  {this.props.stateData.bills.allBills.length}
                </span>
              ) : (
                <span className="badge">0</span>
              )}
            </a>
          ) : (
            <a href="#/bills" className="list-group-item">
              <span
                className="glyphicon glyphicon glyphicon-tags"
                aria-hidden="true"
              />{" "}
              Bills{" "}
              {this.props.stateData.bills.allBills ? (
                <span className="badge">
                  {this.props.stateData.bills.allBills.length}
                </span>
              ) : (
                <span className="badge">0</span>
              )}
            </a>
          )}

          {this.props.location.pathname.slice(1) === "calculator" ? (
            <a
              href="#/calculator"
              className="list-group-item active main-color-bg"
            >
              <span className="glyphicon glyphicon-stats" aria-hidden="true" />{" "}
              Calculator
            </a>
          ) : (
            <a href="#/calculator" className="list-group-item">
              <span className="glyphicon glyphicon-stats" aria-hidden="true" />{" "}
              Calculator
            </a>
          )}
        </div>

        <div className="well">
          <h3>Goals</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">By</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            {this.props.stateData.goals.allGoals ? (
              <tbody>
                {this.props.stateData.goals.allGoals.map((goal, index) => {
                  if (index <= 3) {
                    return (
                      <tr>
                        <td>{goal.goalTitle}</td>
                        <td>{goal.selectedDay}</td>
                        <td>${goal.howMuch}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td>No Goals</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>

        <div className="well">
          <h3>Bills</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date Due</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            {console.log(this.props.stateData.bills)}
            {this.props.stateData.bills.allBills ? (
              <tbody>
                {this.props.stateData.bills.allBills.map((bill, index) => {
                  if (index <= 3) {
                    return (
                      <tr>
                        <td>{bill.billTitle}</td>
                        <td>{bill.endDate}</td>
                        <td>${bill.howMuch}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td>No Bills</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateData: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataFromFireStore: () => dispatch(getDataFromFireStore()),
    getAllGoals: () => dispatch(getAllGoal()),
    getAllBill: () => dispatch(getAllBill())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getDataFromFireStore,
  getTransactionsByCurrentMonth,
  updateBudget
} from "../../Store/plaidContainer";
import { Dimmer, Loader, Segment, Image } from "semantic-ui-react";
import Food from "../../pictures/Food.jpg";
import Payment from "../../pictures/Payment.jpg";
import Travel from "../../pictures/Travel.jpeg";
import Shop from "../../pictures/Shop.jpg";
// import { Collapsible, CollapsibleItem } from "react-materialize";
import BudgetChart from "./BudgetChart";
import { Table } from "reactstrap";
import BudgetsCard from "./BudgetsCard";

class Budgets extends Component {
  constructor() {
    super();
    this.state = {
      set: false,
      budget: "",
      validated: false,
      categories: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //Component Hooks
  componentWillMount() {
    this.props.getTransactions();
  }

  //Component action handlers
  handleChange(event) {
    this.setState(
      {
        budget: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
    if (event.target.value > this.props.plaidInfo.actionlyIncome) {
      event.target.setCustomValidity(
        "Budget cannot be greater than your income!"
      );
      this.setState({
        validated: false
      });
    } else {
      event.target.setCustomValidity("");
      this.setState({
        validated: true
      });
    }
  }

  //SAVE
  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.validated) {
      await this.props.updateBudget(this.state.budget);
      this.setState({
        set: true
      });
    } else {
      alert("Error: Please check your budget!");
    }
  }

  //MODIFY BUDGET
  async handleClick() {
    await this.props.updateBudget(0);
    this.setState({
      set: false,
      budget: ""
    });
  }

  render() {
    let total;
    let transMonthArray;
    let spending;
    let categories;
    if (this.props.plaidInfo.action) {
      if (this.props.plaidInfo.action.transMonth) {
        transMonthArray = this.props.plaidInfo.action.transMonth;

        spending = transMonthArray.map(transaction => {
          return transaction.amount;
        });
        const reducer = (accumulator, currentVal) => accumulator + currentVal;
        total = spending.reduce(reducer);
        categories = {
          "Food and Drink": { id: 0, amount: 0, list: [], picture: Food },
          Shops: { id: 1, amount: 0, list: [], picture: Shop },
          Travel: { id: 2, amount: 0, list: [], picture: Travel },
          Payment: { id: 3, amount: 0, list: [], picture: Payment }
        };
        for (let i = 0; i < transMonthArray.length; i++) {
          let oneCharge = transMonthArray[i];
          categories[oneCharge.category[0]].amount += oneCharge.amount;
          categories[oneCharge.category[0]].list.push(oneCharge);
        }
      }
    }

    return (
      <React.Fragment>
        {this.props.plaidInfo.action ? (
          <React.Fragment>
            {this.props.plaidInfo.action.monthlyIncome ? (
              <div>
                <h3>
                  Your monthly income is $
                  {this.props.plaidInfo.action.monthlyIncome}
                </h3>
                <h4>You spent ${total} this month</h4>
              </div>
            ) : (
              <div>
                <Segment>
                  <Dimmer active>
                    <Loader size="medium">Preparing Files</Loader>
                  </Dimmer>
                  <Image src="/images/wireframe/short-paragraph.png" />
                </Segment>
              </div>
            )}
            <div>
              {this.props.plaidInfo.budget ? (
                <div>
                  <p>
                    Monthly budget for this month is $
                    {this.props.plaidInfo.action.budget}
                  </p>
                  <button onClick={this.handleClick}>Modify budget</button>
                  <BudgetChart
                    budget={this.props.plaidInfo.budget}
                    categories={categories}
                  />
                </div>
              ) : (
                <form onSubmit={this.handleSubmit}>
                  <label>Set up a monthly budget!</label>
                  <input
                    type="number"
                    onChange={this.handleChange}
                    name="budget"
                    value={this.state.budget}
                    placeholder="Please enter an amount to budget"
                  />
                  <button type="submit">Save</button>
                </form>
              )}
              <div>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Amount Spent</th>
                      <th>Transactions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.plaidInfo.action.monthlyIncome ? (
                      Object.keys(categories).map((section, index) => (
                        <React.Fragment key={index}>
                          <BudgetsCard
                            section={section}
                            categories={categories}
                          />
                        </React.Fragment>
                      ))
                    ) : (
                      <Loader active inline="centered" />
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <h1>Loading</h1>
        )}
      </React.Fragment>
    );
  }
}
const MapStateToProps = state => ({
  plaidInfo: state.plaidContainer.plaidData,
  isLoading: state.plaidContainer.isLoading
});
const MapDispatchToProps = dispatch => ({
  getDataFromFireStore: () => dispatch(getDataFromFireStore()),
  getTransactions: () => dispatch(getTransactionsByCurrentMonth()),
  updateBudget: newBudget => dispatch(updateBudget(newBudget))
});

const Budget = connect(
  MapStateToProps,
  MapDispatchToProps
);
export default Budget(Budgets);

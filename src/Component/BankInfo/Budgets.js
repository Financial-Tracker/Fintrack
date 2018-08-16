import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlaid,
  getDataFromFireStore,
  getTransactionsByCurrentMonth,
  updateBudget
} from "../../Store/plaidContainer";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


class Budgets extends Component {
  constructor(){
    super()
    this.state = {
      set: false,
      budget: "",
      validated: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  //Component Hooks
  componentWillMount() { 
    this.props.getTransactions();
  }

  //Component action handlers
  handleChange(event) {
    this.setState({
      budget: event.target.value
    }, () => {console.log(this.state)})
    if(event.target.value > this.props.plaidInfo.monthlyIncome) {
      event.target.setCustomValidity("Budget cannot be greater than your income!")
      this.setState({
        validated: false
      })
    }
    else {
      event.target.setCustomValidity("")
      this.setState({
        validated: true
      })
    }
  }

  //SAVE 
  async handleSubmit(event) {
    event.preventDefault()
    if(this.state.validated) {
      await this.props.updateBudget(this.state.budget)
      this.setState({
        set: true
      })
      window.location.reload();
    }
    else {
      alert("Error: Please check your budget!")
    }
  }

  //MODIFY BUDGET
  async handleClick() {
    await this.props.updateBudget(0)
    this.setState({
      set: false,
      budget: ""
    })
    window.location.reload();
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
        {(this.props.plaidInfo.monthlyIncome)?
        (
          <div>
            <h3>Your monthly income is ${this.props.plaidInfo.monthlyIncome}</h3>
            <h4>You spent ${total} this month</h4>
          </div>
        ) : (
          <div>
          <Segment>
            <Dimmer active>
              <Loader size='medium'>Preparing Files</Loader>
            </Dimmer>
            <Image src='/images/wireframe/short-paragraph.png' />
          </Segment>
        </div>
        )}
        <div>
          {(this.props.plaidInfo.budget)?
          (<div>
            <p>Monthly budget for this month is ${this.props.plaidInfo.budget}</p>
            <button onClick={this.handleClick}>Modify budget</button>
          </div>) : (
             <form onSubmit={this.handleSubmit}>
             <label>Set up a monthly budget!</label>
             <input type="number" onChange={this.handleChange} name="budget" value={this.state.budget} placeholder="Please enter an amount to budget"/>
             <button type="submit">Save</button>
           </form>
          )}
        </div>
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
  getTransactions: () => dispatch(getTransactionsByCurrentMonth()),
  updateBudget: (newBudget) => dispatch(updateBudget(newBudget))
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Budgets);

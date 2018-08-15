import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlaid,
  getDataFromFireStore,
  getTransactionsByCurrentMonth
} from "../../Store/plaidContainer";
import firebase from 'firebase'

const firestore = firebase.firestore()

class Budgets extends Component {
  constructor(){
    super()
    this.state = {
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

  componentDidMount
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

  async handleSubmit(event) {
    event.preventDefault()
    if(this.state.validated) {
      const budget = this.state.budget
      const userEmail = firebase.auth().currentUser.email
      const userRef = await firestore.collection('user').where('email',"==",userEmail.toString()).get()
      const docRefId = userRef.docs[0].id; 
      //update
      firestore.collection('user').doc(""+docRefId+"").update({budget:budget})
    }
    else {
      alert("Error: Please check your budget!")
    }
  }

  handleClick() {
    this.setState({
      budget: "",
      validated: false
    })
  }

  render() { 

    console.log(this.props.plaidInfo)
    let total
    let transMonthArray;
    let spending


    // if(this.props.plaidInfo.budget){
    //   this.setState({
    //     budget: this.props.plaidInfo.budget
    //   })
    // }
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
        {(this.state.budget)?
        (
          <div>
            <h3>Your monthly income is ${this.props.plaidInfo.monthlyIncome}</h3>
            <h4>You spent ${total} this month</h4>
          </div>
        ) : (
          <h1>No budget data here :^(</h1>
        )}
        <div>
          {(this.props.plaidInfo.budget)?(
            <form onSubmit={this.handleSubmit}>
              <label>Set up a monthly budget!</label>
              <input type="number" onChange={this.handleChange} name="budget" value={this.state.budget} placeholder="Please enter an amount to budget"/>
              <button type="submit">Save</button>
            </form>
          ):(<div>
            <p>Monthly budget for this month is ${this.props.plaidInfo.budget}</p>
            <button>Modify budget</button>
          </div>)}
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
  getTransactions: () => dispatch(getTransactionsByCurrentMonth())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Budgets);

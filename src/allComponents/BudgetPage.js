import React, { Component } from "react";
// import BudgetPage from "../Component/BankInfo/Budgets";

import NavBar from "./smallComponents/Navbar";
import SideNav from "./smallComponents/SideNav";
import Transactions from "./smallComponents/Transactions";
import GoalForm from "./smallComponents/GoalForm";
import AccountOverViewSection from "./smallComponents/AccountOverViewSection";
import Footer from "./smallComponents/Footer";
import Budget from "../Component/BankInfo/Budgets";
import { connect } from 'react-redux'
import { getDataFromFireStore } from '../Store/plaidContainer'

class BudgetPage extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getPlaidInfo()
  }
  render() {
    return (
      <div>
        {
          this.props.plaidData.balance ? (
            <div>
              <NavBar link={"Budget"} />
              <section id="main">
                <div className="container">
                  <div className="row">
                    <SideNav link={"Budget"} />
                    <div className="col-md-9">
                      This is budget page
                <Budget />
                      {/* <AccountOverViewSection />
            <Transactions /> */}
                    </div>
                  </div>
                </div>
              </section>
              <Footer />
            </div>
          ) : (
              <div>
                <NavBar link={"Budget"} />
                <section id="main">
                  <div className="container">
                    <div className="row">
                      <SideNav link={"Budget"} />
                      <div className="col-md-9">
                        <div>
                          <button>
                            Log in to your bank account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <Footer />
              </div>

            )
        }
      </div>
    );
  }
}

const mapState = state => ({
  plaidData: state.plaidContainer
})
const mapDispatch = dispatch => ({
  getPlaidInfo: data => dispatch(getDataFromFireStore(data))
})

export default connect(mapState, mapDispatch)(BudgetPage)
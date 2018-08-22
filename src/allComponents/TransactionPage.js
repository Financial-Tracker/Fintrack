import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import GoalForm from './smallComponents/GoalForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'
import BillForm from './smallComponents/BillForm'
import { getDataFromFireStore } from '../Store/plaidContainer'
// import PieChart from './smallComponents/PieChart'


class TransactionPage extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getPlaidInfo()
  }
  render() {
    console.log("Props in transaction", this.props)
    return (
      <div>
        {this.props.plaidInfo.transaction ?
          (
            <div>
              <NavBar link={'Transactions'} />
              <section id="main">
                <div className="container">
                  <div className="row">
                    <SideNav link={'Transactions'} />
                    <div className="col-md-9">
                      <h2 className='row center'>Transaction Table</h2>
                      {/* <AccountOverViewSection /> */}
                      {/* <PieChart /> */}
                      <Transactions />
                    </div>
                  </div>
                </div>
              </section>
              <Footer />
            </div>
          ) : (
            <div>
              <NavBar link={'Transactions'} />
              <section id="main">
                <div className="container">
                  <div className="row">
                    <SideNav link={'Transactions'} />
                    <div className="col-md-9">
                      <h2 className='row center'>Transaction Table</h2>
                      {/* <AccountOverViewSection /> */}
                      {/* <PieChart /> */}
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
    )
  }
}
const mapState = state => ({
  isLoading : state.plaidContainer.isLoading,
  plaidInfo: state.plaidContainer.plaidData
})
const mapDispatch = dispatch => ({
  getPlaidInfo: data => dispatch(getDataFromFireStore(data))
})

export default connect(mapState, mapDispatch)(TransactionPage)
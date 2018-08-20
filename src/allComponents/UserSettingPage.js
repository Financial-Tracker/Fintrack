import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import GoalForm from './smallComponents/GoalForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'

import {getUserProfileInfo, changeUserInfo} from '../Store/userContainer'


class Settings extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
    this.props.getUser()
    this.setState({
      email: this.props.user.email,
      name: this.props.user.name
    }, () => {
      console.log(this.state)
    })
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.updateUser(this.state)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
      <NavBar link={'Settings'}/>
    <section id="main">
      <div className="container">
        <div className="row">
      <SideNav link={'Settings'}/>
          <div className="col-md-9">
          <div>
            <div class="panel panel-default">
            <div class="panel-heading main-color-bg">
              <h3 class="panel-title">Edit Profile Info</h3>
            </div>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" name="email "placeholder={this.props.user.email} value={this.state.email} />
            </div>
            <div class="form-group">
              <label>Name</label>
              <input name="name" type="text" class="form-control" value={this.state.name} onChange={this.handleChange} placeholder={this.props.user.name}/>
            </div>
              <input type="submit" class="btn btn-default" value="Submit" />
            </form>
            </div>
          </div>
            {/* <AccountOverViewSection />
            <Transactions /> */}
          </div>
        </div>
      </div>
    </section>
    <Footer />    
</div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userContainer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {
      dispatch(getUserProfileInfo())
    },
    updateUser: (info) => {
      dispatch(changeUserInfo(info))
    }
  }
}

const connectedSettings = connect(mapStateToProps,mapDispatchToProps)

export default connectedSettings(Settings)
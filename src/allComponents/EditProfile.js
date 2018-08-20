import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getUserProfileInfo, changeUserInfo} from '../Store/userContainer'
import {valid} from "../Component/Forms/validation"

class EditProfile extends Component {
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
    this.props.history.push('/profile')
  }
  render() {
    return (
      <React.Fragment>
        <div>This is the Edit Profile Page</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Change email:</p>
            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder={this.props.user.email}/>
          </div>
          <div>
            <p>Change name:</p>
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder={this.props.user.name}/>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </React.Fragment>
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

const connectedEditProfile = connect(mapStateToProps,mapDispatchToProps)

export default connectedEditProfile(EditProfile)
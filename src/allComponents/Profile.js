import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getUserProfileInfo} from '../Store/userContainer'

class Profile extends Component {
  componentWillMount() {
    this.props.getUser()
  }
  render() {
    return (
      <div>
       
        <h4>Welcome {this.props.user.name}!</h4>
        <div>
          <h6>Info:</h6>
          <div>
            <h7>E-mail: {this.props.user.email}</h7>
          </div>
          <div>
            <h7>Member since: {this.props.user.created}</h7>
          </div>
          <div>
            <h7>Last logged in: {this.props.user.access}</h7>
          </div>
        </div>        
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
    }
  }
}

const connectedProfile = connect(mapStateToProps, mapDispatchToProps)
export default connectedProfile(Profile)
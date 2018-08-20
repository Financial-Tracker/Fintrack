  import React, { Component } from 'react'
  import {connect} from 'react-redux'

  import {getUserProfileInfo} from '../Store/userContainer'

  class Profile extends Component {
    constructor() {
      super()
      this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount() {
      this.props.getUser()
    }

    handleClick(event) {
      event.preventDefault()
      this.props.history.push('/editprofile')
    }
    render() {
      return (
        <div>
          <h4>Welcome {this.props.user.name}!</h4>
          <div>
            <h5>Info:</h5>
            <div>
              <h6>E-mail: {this.props.user.email}</h6>
            </div>
            <div>
              <h6>Member since: {this.props.user.created}</h6>
            </div>
            <div>
              <h6>Last logged in: {this.props.user.access}</h6>
            </div>
          </div>       
          <button onClick={this.handleClick}>Edit Information</button>
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
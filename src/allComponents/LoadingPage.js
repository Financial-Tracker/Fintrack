import React, { Component } from 'react'
import LoadingScreen from 'react-loading-screen'
export default class LoadingPage extends Component {
  render() {
    return (
      <div>
          <LoadingScreen
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    logoSrc='/logo.png'
    text='Here an introduction sentence (Optional)'
  > 

    <div>Loadable content</div>
  </LoadingScreen>
      </div>
    )
  }
}

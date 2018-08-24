import React, { Component } from 'react'

export default class CalculatorPage extends Component {
  render() {
    return (
      <div style={{width: 960, position: 'relative'}}>
        <iframe src="https://www.mortgagecalculator.net/embeddable/v2/?size=1" width="100%" frameBorder={0} scrolling="no" height={300} />
        </div>
    )
  }
}

import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getDataFromFireStore } from '../../Store/plaidContainer'

class Income extends React.Component{

  componentDidMount(){
    this.props.getFireStore();
  }

  render(){
    return (
      <div>
        {Object.keys(this.props.plaidObj).length!==0? 
          <Segment inverted>
          <List divided inverted relaxed>
            <List.Item>
              <List.Content>
                <List.Header>Last year income</List.Header>
                {this.props.plaidObj.income.last_year_income}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Last year income before tax</List.Header>
                {this.props.plaidObj.income.last_year_income_before_tax}
              </List.Content>
            </List.Item>
    
            <List.Item>
              <List.Content>
                <List.Header>Projected yearly income</List.Header>
                {this.props.plaidObj.income.projected_yearly_income}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Projected yearly income before tax</List.Header>
                {this.props.plaidObj.income.projected_yearly_income_before_tax}
              </List.Content>
            </List.Item>
          </List>
        </Segment>: <h1>Loading.... </h1> }
      </div>
    )
  }
}

const mapState = (state)=>{
  return{
    plaidObj: state.plaidContainer
  }
}


const mapDisaptch = (dispatch) => {
  return {
      getFireStore: () => dispatch(getDataFromFireStore())
  }
}
export default connect(mapState, mapDisaptch)(Income)
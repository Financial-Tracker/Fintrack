import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
class Income extends React.Component{

  componentDidMount(){
    this.props.getFireStore();
  }

  render(){
    return (
      <Segment inverted>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content>
              <List.Header>Last year income</List.Header>
              {}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Last year income before tax</List.Header>
              {props.income.last_year_income_before_tax}
            </List.Content>
          </List.Item>
  
          <List.Item>
            <List.Content>
              <List.Header>Projected yearly income</List.Header>
              {props.income.projected_yearly_income}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Projected yearly income before tax</List.Header>
              {props.income.projected_yearly_income_before_tax}
            </List.Content>
          </List.Item>
        </List>
      </Segment>
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
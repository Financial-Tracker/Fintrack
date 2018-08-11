import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const Income = (props) => {
  console.log('INCOME', props);

  return (
    <Segment inverted>
      <List divided inverted relaxed>
        <List.Item>
          <List.Content>
            <List.Header>Last year income</List.Header>
            {props.income.last_year_income}
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
  // <Header as='h3' block>
  //   Last year income: {props.income.last_year_income}
  //   Last year income tax: {props.income.last_year_income_before_tax}
  //   projected income: {props.income.projected_yearly_income}
  //   projected income before tax: {props.income.projected_yearly_income_before_tax}
  // </Header>


}

export default Income;
import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getPlaid, getDataFromFireStore } from "../../Store/plaidContainer";
import { items } from "./item";
// import Moment from "react-moment";
// import { LineChart, Line } from "recharts";
import {
  VictoryChart,
  VictoryLine,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryAxis,
  VictoryTheme
} from "victory";
import { Collapsible, CollapsibleItem } from "react-materialize";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import TransactionChart from "./TransactionChart";

let arr = [];
let otherArr = [];
class BankPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDataFromFireStore();
    console.log(this.props);
    for (let i = 0; i < items.length; i++) {
      let obj = {};
      let newObj = {};
      let element = items[i];
      obj.header = element.name;
      obj.description = `Name: ${element.name};  Category: ${
        element.category[0]
      }`;
      obj.meta = `Expense: $${element.amount}, Date: ${element.date}`;
      obj.date = `${element.date}T12:59-0500`;
      obj.amount = element.amount;
      obj.amout = console.log(obj.date);
      arr.push(obj);
      newObj.y = element.amount;
      newObj.x = element.date;
      newObj.label = `Category: ${element.category[0]}; Date: ${element.date}`;
      otherArr.push(newObj);
      newObj = {};
    }
  }
  render() {
    console.log(arr);
    return (
      <div>
        <h1>Transactions</h1>
        <div>
          <VictoryChart
            containerComponent={
              <VictoryVoronoiContainer label={d => `${d.label}`} />
            }
          >
            <VictoryAxis tickFormat={() => ""} />
            <VictoryAxis dependentAxis />
            <VictoryLine
              labelComponent={<VictoryTooltip />}
              data={otherArr}
              domain={{ y: [-1000, 5500] }}
            />
          </VictoryChart>
        </div>
        <Collapsible popout>
          {arr.map(item => (
            <CollapsibleItem
              header={
                <h4>
                  <Moment format="MM/DD/YYYY">{item.date}</Moment> Spent:
                  <NumberFormat
                    value={item.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale="2"
                    fixedDecimalScale={true}
                  />
                </h4>
              }
              icon="attach_money"
            >
              {item.description}
            </CollapsibleItem>
          ))}
        </Collapsible>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  getPlaid: state.plaidContainer
});
const MapDispatchToProps = dispatch => ({
  getPlaid: () => dispatch(getPlaid()),
  getDataFromFireStore: () => dispatch(getDataFromFireStore())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(BankPage);

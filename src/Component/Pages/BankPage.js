import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getPlaid } from "../../Store/plaidContainer";
import { items } from "./item";
import Moment from "react-moment";
// import { LineChart, Line } from "recharts";
import { VictoryChart, VictoryLine } from "victory";
import { Collapsible, CollapsibleItem } from "react-materialize";

let arr = [];
let otherArr = [];
class BankPage extends Component {
  constructor(props) {
    super(props);
    // header name
    // meta price date
    // description category
  }
  componentDidMount() {
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      let obj = {};
      let newObj = {};
      let element = items[i];
      obj.header = element.name;
      obj.description = `Category: ${element.category[0]}`;
      obj.meta = `Expense: $${element.amount}, Date: ${element.date}`;
      arr.push(obj);
      newObj.y = element.amount;
      newObj.x = element.date;
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
          <VictoryChart>
            <VictoryLine data={otherArr} domain={{ y: [-1000, 5500] }} />
          </VictoryChart>
        </div>
        <Collapsible popout defaultActiveKey={1}>
          <CollapsibleItem header="First" icon="filter_drama">
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header="Second" icon="place">
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header="Third" icon="whatshot">
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  getPlaid: state.plaidContainer
});
const MapDispatchToProps = dispatch => ({
  getPlaid: () => dispatch(getPlaid())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(BankPage);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlaid, getDataFromFireStore } from "../../Store/plaidContainer";
import {
  VictoryChart,
  VictoryLine,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryAxis
} from "victory";
import { Collapsible, CollapsibleItem } from "react-materialize";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

class BankPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      transactionData: [],
      graphData: []
    };
  }
  async componentDidMount() {
    this.props.getDataFromFireStore();
    let items = this.props.plaidInfo.transaction;
    console.log(this.props.plaidInfo);
    if (items) {
      await this.setState({
        items: items
      });
      this.formatData(this.state.items);
    }
  }
  formatData(items) {
    let transactionData = [];
    let graphData = [];
    let cardInfo = {};
    let graphCordinate = {};
    for (let i = 0; i < items.length; i++) {
      let element = items[i];
      cardInfo.header = element.name;
      cardInfo.description = `Name: ${element.name};  Category: ${
        element.category[0]
      }`;
      cardInfo.meta = `Expense: $${element.amount}, Date: ${element.date}`;
      cardInfo.date = `${element.date}T12:59-0500`;
      cardInfo.amount = element.amount;
      transactionData.push(cardInfo);
      cardInfo = {};
      graphCordinate.y = element.amount;
      graphCordinate.x = element.date;
      graphCordinate.label = `Category: ${element.category[0]}; Date: ${
        element.date
      }`;
      graphData.push(graphCordinate);
      graphCordinate = {};
    }
    this.setState({
      transactionData: transactionData,
      graphData: graphData
    });
  }
  render() {
    return (
      <div>
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
                data={this.state.graphData}
                domain={{ y: [-1000, 6500] }}
              />
            </VictoryChart>
          </div>
          <Collapsible popout>
            {this.state.transactionData.map(item => (
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
      </div>
    );
  }
}
const MapStateToProps = state => ({
  plaidInfo: state.plaidContainer
});
const MapDispatchToProps = dispatch => ({
  getPlaid: data => dispatch(getPlaid(data)),
  getDataFromFireStore: () => dispatch(getDataFromFireStore())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(BankPage);

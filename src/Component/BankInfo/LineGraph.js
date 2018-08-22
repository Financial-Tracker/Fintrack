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
const numberLimit = 5;
const account = "BB5WeellQ7CLyMnMMjvQFDKADBd9oJiwvy9jG";
class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: []
    };
    this.filterData = this.filterData.bind(this);
  }
  async componentDidMount() {
    await this.props.getDataFromFireStore();
  }
  componentDidUpdate() {
    if (!this.state.filterData.length) {
      this.filterData();
    }
  }

  filterData() {
    let filterData = [];
    if (this.props.plaidInfo.transaction) {
      for (let i = 0; i < this.props.plaidInfo.transaction.length; i++) {
        let element = this.props.plaidInfo.transaction[i];
        let graphCordinate = {};
        if (element.account_id === account && filterData.length < numberLimit) {
          if (filterData.indexOf()) {
            console.log();
          }
          graphCordinate.x = element.date;
          graphCordinate.y = element.amount;
          graphCordinate.label = `Category: ${element.category[0]}; Date: ${
            element.date
          }`;
          filterData.push(graphCordinate);
          graphCordinate = {};
        }
      }
      console.log(filterData);
      this.setState({ filterData });
    }
  }
  render() {
    return (
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer label={d => `${d.label}`} />
        }
      >
        <VictoryAxis tickFormat={() => ""} />
        <VictoryAxis dependentAxis />
        <VictoryLine
          labelComponent={<VictoryTooltip />}
          data={this.state.filterData}
          interpolation="natural"
          domain={{ y: [-1000, 5500] }}
        />
      </VictoryChart>
    );
  }
}
const MapStateToProps = state => ({
  plaidInfo: state.plaidContainer.plaidData,
  isLoading: state.plaidContainer.isLoading
});
const MapDispatchToProps = dispatch => ({
  getPlaid: data => dispatch(getPlaid(data)),
  getDataFromFireStore: () => dispatch(getDataFromFireStore())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(LineGraph);

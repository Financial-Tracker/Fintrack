import React from "react";
import ToolTip from "./ToolTip";
import { escapeHTML } from "./Util";
import { BarChart } from "react-easy-chart";

export default class BudgetChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);

    const initialWidth = window.innerWidth > 0 ? window.innerWidth : 500;
    this.state = {
      showToolTip: false,
      windowWidth: initialWidth - 100,
      componentWidth: 300
    };
  }
  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x
    });
  }

  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
    }
  }

  mouseOutHandler() {
    this.setState({ showToolTip: false });
  }
  getCategoriesList() {
    let finalArr = [];
    // for (let key in this.props.categories) {
    //   const priceList = this.props.categories[key].list;
    //   priceList.sort((a, b) => {
    //     return (
    //       Number(a.date.split("2018-08-")[1]) -
    //       Number(b.date.split("2018-08-")[1])
    //     );
    //   });
    //   for (let i = 0; i < priceList.length; i++) {
    //     finalArr.push({
    //       x: priceList[i].date.split("2018-"),
    //       y: priceList[i].amount
    //     });
    //   }
    // }
    console.log(this.props);
    for (let key in this.props.weeks) {
      let coordinate = {
        x: key,
        y: this.props.weeks[key]
      };
      finalArr.push(coordinate);
    }
    console.log(finalArr);
    return finalArr;
  }
  createTooltip() {
    if (this.state.showToolTip) {
      return (
        <ToolTip top={this.state.top} left={this.state.left}>
          On {this.state.x} you spent {this.state.y}
        </ToolTip>
      );
    }
    return false;
  }
  render() {
    return (
      <div>
        {this.createTooltip()}
        <BarChart
          axisLabels={{
            x: "My x Axis",
            y: "My y Axis",
            y2: "My second y Axis"
          }}
          axes
          grid
          colorBars
          interpolate={"cardinal"}
          height={450}
          width={650}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}
          mouseMoveHandler={this.mouseMoveHandler}
          lineData={this.defaultLineData}
          data={this.getCategoriesList()}
          yDomainRange={[0, 4600]}
        />
      </div>
    );
  }
}

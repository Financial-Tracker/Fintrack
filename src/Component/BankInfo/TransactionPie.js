import React from 'react';
import ToolTip from './ToolTip'
import { PieChart } from 'react-easy-chart';

const brandColors = {
    greyBlueOne: '#1e313c',
    greyBlueTwo: '#3f4c55',
    greyBlueThree: '#667178',
    yellow: '#f4e956',
    orange: '#e3a51a',
    green: '#aaac84',
    lightGreen: '#dce7c5',
    lightGrey: '#e4e8ec'
};
class TransactionPie extends React.PureComponent{
    constructor(props) {
        super(props);
    
        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.toggleState = this.toggleState.bind(this);
    
        this.state = {
            showToolTip: false,
            componentWidth: 300
            };
            this.styles = {
            '.pie-chart-lines': {
                stroke: 'rgba(0, 0, 0, 1)',
                strokeWidth: 1
            },
            '.pie-chart-text': {
                fontSize: '10px',
                fill: 'white'
            }
            };
        }
        
    mouseOverHandler(d, e) {
        this.setState({
        showToolTip: true,
        top: `${e.y - 10}px`,
        left: `${e.x + 10}px`,
        value: d.value,
        key: d.data.key });
    }
    
    mouseMoveHandler(e) {
        if (this.state.showToolTip) {
        this.setState({ top: `${e.y}px`, left: `${e.x + 10}px` });
        }
    }
    
    mouseOutHandler() {
        this.setState({ showToolTip: false });
    }
    toggleState() {
        this.setState({
        active: !this.state.active
        });
    }
    
    createTooltipForCategories() {
        if (this.state.showToolTip) {
        return (
            <ToolTip
            top={this.state.top}
            left={this.state.left}
            >
            ${this.state.value} on {this.state.key}
            </ToolTip>
        );
        }
        return false;
    }
    getSingleAccount(accountId){
        for(let i =0;i<this.props.plaidData.balance.length; i++){
            if(this.props.plaidData.balance[i].account_id=== accountId){
                return this.props.plaidData.balance[i].name
            }
        }
    }  
    categoryChart(){
        let catArr = []
        let hash = {}
        for (let i=0; i<this.props.filter.length;i++){
            if(!hash[this.props.filter[i].category[0]]){
                hash[this.props.filter[i].category[0]] = this.props.filter[i].amount
            }
            else{
                hash[this.props.filter[i].category[0]] += this.props.filter[i].amount
            }
        }
        for(let key in hash){
            catArr.push({key: key, value: hash[key]})
        }
        return catArr
    }
    accountChart(){
        let arr = []
        let hash = {}
        for(let i =0; i<this.props.filter.length; i++){
            if(!hash[this.getSingleAccount(this.props.filter[i].account_id)]){
                hash[this.getSingleAccount(this.props.filter[i].account_id)] = this.props.filter[i].amount
            }
            else{
                hash[this.getSingleAccount(this.props.filter[i].account_id)] = this.props.filter[i].amount
            }
        }
        for(let key in hash){
            arr.push({key: key, value: hash[key]})
        }
        return arr
    }
    
    render(){
        return(
            <div>
                {this.createTooltipForCategories()}
                <label> Categories </label>
                <PieChart
                size={200} 
                innerHoleSize = {100}
                data={this.categoryChart()}
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}
                />
                <label> Accounts </label>
                <PieChart
                size={200} 
                innerHoleSize = {100}
                data={this.accountChart()}
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}
                />

            </div>
        )
    }
}
export default TransactionPie


import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import ToolTip from './ToolTip'
import { escapeHTML } from './Util'
import { PieChart } from 'react-easy-chart';
import Scrollspy from 'react-scrollspy';

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
                You spend ${this.state.value} on {this.state.key}
                </ToolTip>
            );
            }
            return false;
        }
        categoryChart(){
            let catArr = []
            let hash = {}
            for (let i=0; i<this.props.plaidData.transaction.length;i++){
                if(!hash[this.props.plaidData.transaction[i].category[0]]){
                    hash[this.props.plaidData.transaction[i].category[0]] = this.props.plaidData.transaction[i].amount
                }
                else{
                    hash[this.props.plaidData.transaction[i].category[0]] += this.props.plaidData.transaction[i].amount
                }
            }
            for(let key in hash){
                catArr.push({key: key, value: hash[key]})
            }
            return catArr
        }
    
    render(){
        console.log('GOT IT! ', this.props.plaidData)
        return(
            <div>
                {this.createTooltipForCategories()}
                <PieChart
                size={200} 
                innerHoleSize = {100}
                data={this.categoryChart()}
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}/>
            </div>
        )
    }
}
export default TransactionPie


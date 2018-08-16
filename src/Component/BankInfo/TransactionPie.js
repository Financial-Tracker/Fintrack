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
        console.log('HASH: ', hash)
    }
    render(){
        console.log('GOT IT! ', this.props.plaidData)
        this.categoryChart()
        return(
            <PieChart
            labels
            size={200} 
            innerHoleSize = {100}
            data={[{ key: 'A', value: 100 },{ key: 'B', value: 200 },{ key: 'C', value: 50 }]}/>
        )
    }
}
export default TransactionPie


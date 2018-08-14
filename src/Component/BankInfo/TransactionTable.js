import React from 'react'
import {connect} from 'react-redux'
import {getDataFromFireStore } from '../../Store/plaidContainer'
import { Header, Table, Label } from 'semantic-ui-react'
import {Switch} from 'react-router-dom'


class TransactionTable extends React.Component{
    constructor(){
        super();
        this.state={
            filteredArr: []
        }
    }
    componentDidMount(){
        this.props.getFireStore()
    }
    getSingleBalance(accountId){
        for(let i =0;i<this.props.plaidObj.balance.length; i++){
            if(this.props.plaidObj.balance[i].account_id=== accountId){
                return this.props.plaidObj.balance[i]
            }
        }
    }  
    render(){
        return(
            <div>
                {Object.keys(this.props.plaidObj).length !==0?
                <div>
                    <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                        <Table.Cell>
                            <Label ribbon>Transactions</Label>
                        </Table.Cell>
                        </Table.Row>
                    </Table.Header>
                        <Table.Body>
                            {this.props.plaidObj.transaction.map((elem,idx)=>{
                                return(
                                    <Switch key={elem.transaction_id}>
                                        {idx<5? //here instead of 5 you can add your prop count
                                        <Table.Row key = {idx}>
                                            <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>
                                                {elem.name}
                                                <Header.Subheader>Date: {elem.date}</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                            </Table.Cell>
                                            <Table.Cell> {elem.amount}</Table.Cell>
                                            <Table.Cell> {elem.category.map(item=>item)}</Table.Cell>
                                            <Table.Cell> {this.getSingleBalance(elem.account_id).name}</Table.Cell>
                                        </Table.Row>
                                        : <Switch> </Switch>}
                                    </Switch>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>
            : <h3>Loading....</h3>}
            </div>
        )
    }
}


const mapDispatch=(dispatch)=>{
    return{
        getFireStore: ()=>dispatch(getDataFromFireStore())
    }
}
const mapState=(state)=>{
    return{
        plaidObj: state.plaidContainer
    }
}

export default connect(mapState, mapDispatch)(TransactionTable)
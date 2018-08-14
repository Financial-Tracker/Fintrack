import React from 'react'
import {connect} from 'react-redux'
import {getDataFromFireStore } from '../../Store/plaidContainer'
import { Header, Table } from 'semantic-ui-react'
import {Switch} from 'react-router-dom'
import TransactionHeader from './TransactionHeader'
import TransactionFooter from './TransactionFilter'

class TransactionTable extends React.Component{
    constructor(){
        super();
        this.state={
            filteredArr: [],
            sizeFilter: 5,
            priceFilter: "AllPrice",
            accountFilter: "All",
            categoryFilter: 'AllCategories',
        }
        this.handleChange = this.handleChange.bind(this)
        this.sizeOption= this.sizeOption.bind(this)
        this.accountOption= this.accountOption.bind(this)
        this.categoryOption= this.categoryOption.bind(this)


    }
    componentDidMount(){
        this.props.getFireStore()
    }
    async handleChange(event, data){
        if(data.name === "size"){
            await this.setState({
                sizeFilter: data.value
            })
        }
        else if(data.name === "account"){
            await this.setState({
                accountFilter: data.value
            })
        }
        else if(data.name === "price"){
            await this.setState({
                priceFilter: data.value
            })
        }
        else if(data.name === "category"){
            await this.setState({
                categoryFilter: data.value
            })
        }
    }
    getSingleBalance(accountId){
        for(let i =0;i<this.props.plaidObj.balance.length; i++){
            if(this.props.plaidObj.balance[i].account_id=== accountId){
                return this.props.plaidObj.balance[i].name
            }
        }
    }  
    sizeOption(){
        let arr = []
        for(let i = 0; i<=this.props.plaidObj.transaction.length; i++){
            const str = i.toString()
            arr.push({key: str, text:str, value: i, name:"size"})
        }
        const finallArr = arr.reverse()
        return(finallArr)
    }
    accountOption(){
        let arr = [{key: 6, text:"All", value: "All", name:"account"}]
        for(let i = 0; i<this.props.plaidObj.balance.length; i++){
            const account = this.props.plaidObj.balance[i].name
            arr.push({key: i, text:account, value: account, name:"account"})
        }
        return(arr)
    }
    priceOption(){
        let arr = [
            {key: 1, text:"AllPrice", value: "AllPrice", name:"price"},
            {key: 2, text:"less than 10", value: 10, name:"price"},
            {key: 3, text:"less than 50", value: 50, name:"price"},
            {key: 4, text:"less than 100", value: 100, name:"price"},
            {key: 5, text:"less than 500", value: 500, name:"price"},
            {key: 6, text:"less tham 1,000,000", value: 1000000, name:"price"}

        ]
        return arr
    }
    categoryOption(){
        let arr = [{key: 100000, text:"AllCategories", value: "AllCategories", name:"category"}]
        let hash = {}
        let finalArr = []
        for(let i = 0; i<this.props.plaidObj.transaction.length; i++){
            const subcategory = this.props.plaidObj.transaction[i].category[0]
            arr.push({key: i, text:subcategory, value: subcategory, name:"category"})
        }
        for(let j= 0; j< arr.length;j++){
            if(!hash[arr[j].text]){
                hash[arr[j].text] = 1 
            }
            else{
                hash[arr[j].text]++
            }
        }
        for(let key in hash){
            finalArr.push({key: key, text:key, value: key, name:"category"})
        }
        return finalArr
    }
    render(){
        return(
            <div>
                {Object.keys(this.props.plaidObj).length !==0?
                <div>
                    <Table basic='very' celled collapsing>
                        <TransactionHeader />
                        <Table.Body>
                            {this.props.plaidObj.transaction.map((elem,idx)=>{
                                return(
                                    <Switch key={elem.transaction_id}>
                                        {idx<this.state.sizeFilter 
                                        && (this.state.accountFilter=== "All" || this.state.accountFilter === this.getSingleBalance(elem.account_id))
                                        && (this.state.priceFilter==="AllPrice" || this.state.priceFilter > elem.amount)
                                        &&(this.state.categoryFilter === "AllCategories" || this.state.categoryFilter === elem.category[0])? 
                                        <Table.Row key = {idx}>
                                            <Table.Cell>
                                            <Header as='h4' image>
                                                <Header.Content>
                                                {elem.name}
                                                <Header.Subheader>Date: {elem.date}</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                            </Table.Cell>
                                            <Table.Cell> USD: {elem.amount}</Table.Cell>
                                            <Table.Cell> {elem.category.map(item=>item)}</Table.Cell>
                                            <Table.Cell> {this.getSingleBalance(elem.account_id)}</Table.Cell>
                                        </Table.Row>
                                        : <Switch> </Switch>}
                                    </Switch>
                                )
                            })}
                        </Table.Body>
                        <TransactionFooter 
                        state = {this.state}
                        size = {this.sizeOption} 
                        handleChange= {this.handleChange} 
                        account={this.accountOption}
                        price = {this.priceOption}
                        category = {this.categoryOption}/>
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
import React from 'react'
import {connect} from 'react-redux'
import{getDataFromFireStore} from '../../Store/plaidContainer'
import{ProgressBar, Col} from 'react-materialize'



class SingleBalance extends React.Component{
    async componentDidMount(){
        await this.props.getFireStore(); 
    }

    getSingleBalance(){
            for(let i =0;i<this.props.plaidObj.balance.length; i++){
                if(this.props.plaidObj.balance[i].account_id=== this.props.match.params.id){
                    return this.props.plaidObj.balance[i]
                }
            }
    }

    render(props){
        return(
            <div>
                <h1> Single Balance</h1>
                {Object.keys(this.props.plaidObj).length !==0? 
                    <div>
                        <h2>Name: {this.getSingleBalance().name}</h2>
                        <h2>Available: {this.getSingleBalance().balances.available === null?  0: this.getSingleBalance().balances.available} in {this.getSingleBalance().balances.iso_currency_code}</h2>
                        <h2>Current: {this.getSingleBalance().balances.current} </h2>
                        <h2>Limit: {this.getSingleBalance().balances.limit=== null? "None": this.getSingleBalance().balances.limit} </h2>
                        <h2>Type: {this.getSingleBalance().subtype}/{this.getSingleBalance().type}</h2>
                    </div>
                :<Col s={12}><ProgressBar /></Col>}
            </div>
        )
    }
}

const mapState =(state)=>{
    return{
        plaidObj: state.plaidContainer
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getFireStore: ()=>dispatch(getDataFromFireStore())
    }
}


export default connect(mapState, mapDispatch)(SingleBalance)
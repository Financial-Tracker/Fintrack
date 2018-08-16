import React from 'react'
import {connect} from 'react-redux'
import{getDataFromFireStore} from '../../Store/plaidContainer'
import CardBalance from './CardBalance'
import{ProgressBar, Col} from 'react-materialize'



class Balance extends React.Component{
    async componentDidMount(){
        await this.props.getFireStore();
    }

    render(){
        return(
            <div className="center">
                <h1>Balance page</h1>
                {Object.keys(this.props.plaidObj).length !==0?<div>{this.props.plaidObj.balance.map(elem=>{
                    return(
                        <CardBalance 
                        available={elem.balances.available} 
                        currency={elem.balances.iso_currency_code}
                        subtype={elem.subtype}
                        type={elem.type}
                        officialName = {elem.official_name}
                        id={elem.account_id}
                        key = {elem.account_id}
                        />
                    )
                })} </div>
                :<Col s={12}><ProgressBar /></Col>
                }

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


export default connect(mapState, mapDispatch)(Balance)



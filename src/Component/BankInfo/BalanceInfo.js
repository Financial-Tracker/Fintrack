import React from 'react'
import {connect} from 'react-redux'
import{getDataFromFireStore} from '../../Store/plaidContainer'
import SingleBalance from './SingleBalance'


let counter = 0

class Balance extends React.Component{
    constructor(){
        super()
    }
    async componentDidMount(){
        await this.props.getFireStore();
    }

    render(){
        counter++
        console.log("Counter: ", counter, "=>",this.props.plaidObj)
        return(
            <div className="center">
                <h1>Balance page</h1>
                {counter>=3?<div>{this.props.plaidObj.balance.map(elem=>{
                    return(
                        <SingleBalance 
                        available={elem.balances.available} 
                        currency={elem.balances.iso_currency_code}
                        subtype={elem.subtype}
                        type={elem.type}
                        officialName = {elem.official_name}
                        id={elem.account_id}
                        />
                    )
                })} </div>
                :<h1>Loading...</h1>
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



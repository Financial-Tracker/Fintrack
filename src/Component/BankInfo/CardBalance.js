import React from 'react'
import {connect} from 'react-redux'
import{getDataFromFireStore} from '../../Store/plaidContainer'
import { Card } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class CardBalance extends React.Component{
    async componentDidMount(){
        // await this.props.getFireStore();
    }
    render(props){
        console.log(this.props.account)
        let id = this.props.account.account_id
        let currency = this.props.account.name
        let available = this.props.account.balances.available
        let subtype = this.props.account.subtype
        let officialName = this.props.officialName

        return(
            // <div>
            //     hello
            // </div>
            <Link to={`/balance/${id}`}>
                <Card 
                header = {officialName}
                meta = {currency}
                description = {[
                    `Available: ${available} `,
                    `subtype: ${subtype} `,
                ].join('')}
                />
            </Link>
        )
    }
}

const mapState =(state)=>{
    return{
        // plaidObj: state.plaidContainer
    }
}
const mapDispatch=(dispatch)=>{
    return{
        // getFireStore: ()=>dispatch(getDataFromFireStore())
    }
}


export default connect(mapState, mapDispatch)(CardBalance)
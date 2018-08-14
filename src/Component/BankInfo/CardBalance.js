import React from 'react'
import {connect} from 'react-redux'
import{getDataFromFireStore} from '../../Store/plaidContainer'
import { Card } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class CardBalance extends React.Component{
    async componentDidMount(){
        await this.props.getFireStore();
    }
    render(props){
        return(
            <Link to={`/balance/${this.props.id}`}>
                <Card 
                header = {this.props.officialName}
                meta = {this.props.currency}
                description = {[
                    `Available: ${this.props.available} `,
                    `type: ${this.props.type} `,
                    `subtype: ${this.props.subtype} `,
                ].join('')}
                />
            </Link>
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


export default connect(mapState, mapDispatch)(CardBalance)
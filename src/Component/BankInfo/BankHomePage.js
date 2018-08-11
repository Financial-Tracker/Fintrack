import React from 'react'
import {connect} from 'react-redux'
import{getPlaid, getDataFromFireStore} from '../../Store/plaidContainer'


class BankHomePage extends React.Component{
    async componentDidMount(){
        // this.props.getPlaid(this.props.plaidObj)
        this.props.getFireStore()
        console.log("PLAID OBJ",this.props.plaidObj)

    }
    render(){
        return(
            <div>
                <h1>This is homepage after logging into bank account </h1>
                {/* <h1> auth obj looks like: {this.props.plaidObj.auth[0].name}</h1> */}
                <h1>this.props.plaidObj.email: {this.props.plaidObj.email}</h1>
            </div>
        )
    }
}

const mapState = (state)=> {
    return {
        plaidObj: state.plaidContainer
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getPlaid:(data)=>dispatch(getPlaid(data)),
        getFireStore: ()=>dispatch(getDataFromFireStore())
    }
}
export default connect(mapState, mapDispatch)(BankHomePage)
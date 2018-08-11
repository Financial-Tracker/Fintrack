import React from 'react'
import {connect} from 'react-redux'
import {firestore} from '../../Firebase/firebase'
import firebase from 'firebase'


class BankHomePage extends React.Component{
    async componentDidMount(){

        console.log("YOOOOOO: ",this.props.plaidObj)
    }
    render(){
        return(
            <div>
                <h1>This is homepage after logging into bank account </h1>
                {/* <h1> auth obj looks like: {this.props.plaidObj.auth[0].name}</h1> */}
            </div>
        )
    }
}

const mapState = (state)=> {
    return {
        plaidObj: state.plaidContainer
    }
}

export default connect(mapState)(BankHomePage)
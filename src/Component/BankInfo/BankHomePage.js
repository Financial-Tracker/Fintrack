import React from 'react'
import { connect } from 'react-redux'
import { getPlaid, getDataFromFireStore } from '../../Store/plaidContainer'
import Income from './Income'

let counter = 0
class BankHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    componentDidMount() {
        // this.props.getPlaid(this.props.plaidObj)
        this.props.getFireStore()
    }
    // componentWillUpdate(nextProps) {
    //     // console.log('nextProps', nextProps)
    //     // console.log('nextState', nextState)
    //     if (!nextProps.plaidObj.income) {
    //         this.props.getFireStore()
    //     }
    // }
    render() {
        counter++
        // console.log("PLAID OBJ", this.props)
        return (
            <div>
                {counter >= 3 ? <div><Income income={this.props.plaidObj.income} /></div> : <div></div>}
            </div>

            // <h1>This is homepage after logging into bank account </h1>
            // {/* <h1> auth obj looks like: {this.props.plaidObj.auth[0].name}</h1> */}
            // <h1>this.props.plaidObj.email: {this.props.plaidObj.email}</h1>

        )
    }
}

const mapState = (state) => {
    return {
        plaidObj: state.plaidContainer
    }
}
const mapDispatch = (dispatch) => {
    return {
        getPlaid: (data) => dispatch(getPlaid(data)),
        getFireStore: () => dispatch(getDataFromFireStore())
    }
}
export default connect(mapState, mapDispatch)(BankHomePage)
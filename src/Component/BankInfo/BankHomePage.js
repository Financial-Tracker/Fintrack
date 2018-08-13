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
    render() {
        counter++
        return (
            <div>
                {Object.keys(this.props.plaidObj).length!==0? <div><h1>hi</h1></div> : <div></div>}
            </div>
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
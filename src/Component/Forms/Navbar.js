
import {Link } from "react-router-dom";
import {connect} from 'react-redux'
import { auth } from "../../Firebase";
import {Navbar,
        NavItem
    } from 'react-materialize'

import React, { Component } from 'react'
import {removeDataFromFireStore} from '../../Store/plaidContainer'

class Nav extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        auth.signOut()
        this.props.deleteFireStore()
    }
    render() {
        return (
        <div>
            <Navbar fixed brand='FinTrack' className='grey' right >
                <NavItem><Link to = "/accounts">Add Accounts</Link></NavItem>
                <NavItem><Link to = "/settings">Settings</Link></NavItem>
                <NavItem><Link to = "/profile">Profile</Link></NavItem>
                <NavItem onClick = {this.handleClick}><Link to = "/">Log out</Link></NavItem>
            </Navbar>
            <Navbar className='light-green' right>
                <NavItem ><Link to = "/bankInfo">Overview</Link></NavItem>
                <NavItem ><Link to = "/transactionTable">Transactions</Link></NavItem>
                <NavItem ><Link to = "/balance">Balance</Link></NavItem>
                <NavItem ><Link to = "/income">Income</Link></NavItem>
                <NavItem ><Link to = "/budgets">Budgets</Link></NavItem>
                <NavItem ><Link to = "/goals">Goals</Link></NavItem>
                <NavItem ><Link to = "/saves">Ways to save</Link></NavItem>
            </Navbar>
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
        deleteFireStore: ()=>dispatch(removeDataFromFireStore())
    }
}


export default connect(mapState, mapDispatch)(Nav)
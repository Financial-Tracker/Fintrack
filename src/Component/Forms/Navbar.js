
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import {getDataFromFireStore} from '../../Store/plaidContainer'
import logo from '../../pictures/fintracklogo.png'
import {connect} from 'react-redux'

import {Button,
        Icon,
        Navbar,
        NavItem
    } from 'react-materialize'

import React, { Component } from 'react'

 class Nav extends Component {
render() {
    return (
    <div>
        <Navbar fixed brand='FinTrack' className='grey' right>
        <NavItem >Add Accounts</NavItem>
        <NavItem  >Settings</NavItem>
        <NavItem  href='components.html'>Profile</NavItem>
        <NavItem  href='components.html'>Log out</NavItem>
        </Navbar>
        <Navbar className='light-green' right>
        <NavItem >Overview</NavItem>
        <NavItem  >Transactions</NavItem>
        <NavItem  href='components.html'>Budgets</NavItem>
        <NavItem  href='components.html'>Goals</NavItem>
        <NavItem  href='components.html'>Ways to save</NavItem>
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
        getFireStore: ()=>dispatch(getDataFromFireStore())
    }
}


export default connect(mapState, mapDispatch)(Nav)
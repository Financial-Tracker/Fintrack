
import {Link } from "react-router-dom";
import {connect} from 'react-redux'
import { auth } from "../../Firebase";
import {Navbar,
        NavItem,
        SideNav,
        SideNavItem,
        Button
    } from 'react-materialize'

import React, { Component } from 'react'
import { withAuth } from "fireview";
import navlogo from './navbar.jpg'
import {removeDataFromFireStore, getDataFromFireStore} from '../../Store/plaidContainer'
import {stack as Menu} from 'react-burger-menu'
require('./cssForms.css')

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            sidebarOpen: true
        };
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.props.getPlaidData()
    }
    
    handleClick(){
        console.log('log out')
        auth.signOut()
        this.props.deleteFireStore()
    }
    render() {
        console.log(this.props._user)
        return (
            <div>
            {
                !this.props._user ? null :
                <Menu className='center' burgerButtonClassName={ "my-burger-button"} > 
            <h3>FinTrack</h3>
            <h3><Link to='/account'>Add Account </Link></h3>
            <h3><Link to = "/profile">Profile</Link> </h3>
            <h3> <Link to='/settings'> Settings</Link></h3>
            <h3 onClick={this.handleClick}><Link to='/'>Log out</Link></h3>
            <hr />
            <h4><Link to='/overview'> Overview </Link></h4>
            <h4> <Link to='/transaction'>Transactions </Link> </h4>
            <h4><Link to='/balance'> Balance </Link></h4>
            <h4><Link to='/income'> Income </Link></h4>
            <h4><Link to='/budgets'> Budgets </Link></h4>
            <h4><Link to='/goals'> Goals </Link></h4>
            <h4><Link to='/saves'> Ways to save </Link></h4>
        </Menu>
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
        getPlaidData : ()=> dispatch(getDataFromFireStore()),
        deleteFireStore: ()=>dispatch(removeDataFromFireStore())
    }
}


export default connect(mapState, mapDispatch)(withAuth(Nav))
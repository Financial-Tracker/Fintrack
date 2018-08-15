
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

import {removeDataFromFireStore} from '../../Store/plaidContainer'

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            sidebarOpen: true
        };
        this.handleClick = this.handleClick.bind(this)
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

    {this.props._user ?
    
    <SideNav
    // trigger={<Button>SIDE NAV DEMO</Button>}
    options={{ closeOnClick: true }}
    fixed={true}
    >
    <SideNavItem userView
        // user={{
        // background: {navlogo},
        // image: '',
        // name: 'John Doe',
        // email: 'jdandturk@gmail.com'
        // }}
    />
    <h3>FinTrack</h3>
    <SideNavItem href='#account'>Add Account</SideNavItem>
    <SideNavItem href='#settings'>Settings</SideNavItem>
    <SideNavItem href='#profile'>Profile</SideNavItem>
    <SideNavItem onClick={this.handleClick}>Log out</SideNavItem>
    <SideNavItem divider />
    <SideNavItem href='#overview'>Overview</SideNavItem>
    <SideNavItem href='#transaction'>Transactions</SideNavItem>
    <SideNavItem href='#balance'>Balance</SideNavItem>
    <SideNavItem href='#income'>Income</SideNavItem>
    <SideNavItem href='#budgets'>Budgets</SideNavItem>
    <SideNavItem href='#goals'>Goals</SideNavItem>
    <SideNavItem href='#saves'>Ways to save</SideNavItem>
    </SideNav>
    
    
    : 
    <SideNav
    // trigger={<Button>SIDE NAV DEMO</Button>}
    options={{ closeOnClick: true }}
    fixed={true}
    >
    <SideNavItem userView
        // user={{
        // background: {navlogo},
        // image: '',
        // name: 'John Doe',
        // email: 'jdandturk@gmail.com'
        // }}
    />
    <h3>FinTrack</h3>
    <SideNavItem href='#login'>Login</SideNavItem>
    <SideNavItem href='#signup '>Sign up</SideNavItem>
    <SideNavItem divider />
    </SideNav>
    }

            {/* {
                this.props._user ?
                <div>
                <Navbar fixed brand='FinTrack' className='grey' right >
                <NavItem><Link to = "/account">Add Account</Link></NavItem>
                <NavItem><Link to = "/settings">Settings</Link></NavItem>
                <NavItem><Link to = "/profile">Profile</Link></NavItem>
                <NavItem onClick = {this.handleClick}><Link to = "/">Log out</Link></NavItem>
            </Navbar>
            <Navbar className='light-green' right>
                <NavItem ><Link to = "/overview">Overview</Link></NavItem>
                <NavItem ><Link to = "/transaction">Transactions</Link></NavItem>
                <NavItem ><Link to = "/balance">Balance</Link></NavItem>
                <NavItem ><Link to = "/income">Income</Link></NavItem>
                <NavItem ><Link to = "/budgets">Budgets</Link></NavItem>
                <NavItem ><Link to = "/goals">Goals</Link></NavItem>
                <NavItem ><Link to = "/saves">Ways to save</Link></NavItem>
            </Navbar>
                </div>
                
                : 
                    <div>
            <Navbar fixed className='grey' right >
                <NavItem><Link to = "/">Login</Link></NavItem>
                <NavItem><Link to = "/signup">Sign up</Link></NavItem>
            </Navbar>
                    </div>
            } */}


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


export default connect(mapState, mapDispatch)(withAuth(Nav))
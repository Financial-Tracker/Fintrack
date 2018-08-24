import React, { Component } from 'react'
import {auth} from '../../Firebase'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {removeDataFromFireStore} from '../../Store/plaidContainer'
import {getUserProfileInfo} from '../../Store/userContainer'
class Navbar extends Component {
    constructor(){
        super()
        this.state ={ 
            currentLink : ''
        }
        
    }
    componentDidMount(){
        this.props.getUserData()
    }
    linkHandler = (evt) =>{
        console.log('clicked', evt, this.state)
    }
userContaineruserContainer
    logOutHandler = () => {
        console.log('logout button clicked')
        auth.signOut()
        this.props.removeDataFromFireStore()   
    }

    changeAccountHandler = () =>{
        console.log('change account')
    }
render() {
    let userName = (this.props.user.userContainer.name)
    console.log('username', userName)
    let link = this.props.location.pathname.slice(1)
    return (
        <div>
    <nav className="navbar navbar-default">
        <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-piggy-bank" aria-hidden="true"> </span> FinTrack</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            {link ? <li><a href='#/'>Dashboard</a></li>: <li className='active'><a href='#/'>Dashboard</a></li> }
            {link === 'transactions' ? <li className='active'><a href='#/transactions'>Transactions</a></li> : <li><a href='#/transactions'>Transactions</a></li>}
            {link === 'budget'? <li className='active'><a href='#/budget'>Budgets</a></li> :  <li><a href='#/budget'>Budgets</a></li>}
            {link === 'goal' ? <li className='active'><a href='#/goal'>Goals</a></li> : <li><a href='#/goal'>Goals</a></li>}
            {link === 'bills' ? <li className='active'><a href='#/bills'>Bills</a></li> : <li><a href='#/bills'>Bills</a></li>}
            {link === 'calculator' ? <li className='active'><a href='#/calculator'>Calculator</a></li> : <li><a href='#/calculator'>Calculator</a></li>}
            </ul>
            <ul className="nav navbar-nav navbar-right">
            {link === 'Settings' ? <li className='active'><a href="#/settings">Welcome, {userName ? userName: null}</a></li> : <li><a href="#/settings">Welcome, {userName ? userName: null}</a></li>}
            <li onClick={this.logOutHandler}><a href="#">Logout</a></li>
            </ul>
        </div>
        </div>
    </nav>

    <header id="header">
        <div className="container">
        <div className="row">
            <div className="col-md-10">
            <h1><span className="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> FinTrack <small>All About The Green</small></h1>
            </div>
            <div className="col-md-2">
            <div className="dropdown create">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Short Cuts 
                <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href='#/plaid'>Change Bank Account</a></li>
                <li><a type="button" data-toggle="modal" data-target="#addGoalForm">Add Goal</a></li>
                <li><a type="button" data-toggle="modal" data-target="#addBillForm">Add Bill</a></li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </header>
    

    <section id="breadcrumb">
        <div className="container">
        <ol className="breadcrumb">
        {!link == '' ?
<li className="active">Dashboard > {link}</li>
        :
        <li className="active">Dashboard </li>
        }
        </ol>
        </div>
    </section>
    </div>
    )
}
}

const mapStateToProps = state => {
    return {
        user: state,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeDataFromFireStore: () => {dispatch(removeDataFromFireStore())},
        getUserData : () => dispatch(getUserProfileInfo())

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
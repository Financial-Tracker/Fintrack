import React, { Component } from 'react'
import {auth} from '../../Firebase'
import { Link } from "react-router-dom";
class Navbar extends Component {
    constructor(){
        super()
        this.state ={ 
            currentLink : ''
        }
        
    }
    linkHandler = (evt) =>{
        console.log('clicked', evt, this.state)
    }

    logOutHandler = () => {
        console.log('logout button clicked')
        auth.signOut()
    }

    changeAccountHandler = () =>{
        console.log('change account')
    }
render() {
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
            <a className="navbar-brand" href="#">FinTrack</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            {this.props.link ? <li><a href='#/'>Dashboard</a></li>: <li className='active'><a href='#/'>Dashboard</a></li> }
            {this.props.link === 'Transactions' ? <li className='active'><a href='#/transactions'>Transactions</a></li> : <li><a href='#/transactions'>Transactions</a></li>}
            {this.props.link === 'Budget'? <li className='active'><a href='#/budget'>Budgets</a></li> :  <li><a href='#/budget'>Budgets</a></li>}
            {this.props.link === 'Goals' ? <li className='active'><a href='#/goal'>Goals</a></li> : <li><a href='#/goal'>Goals</a></li>}
            {this.props.link === 'Ways to save' ? <li className='active'><a href='#/waystosave'>Ways to save</a></li> : <li><a href='#/waystosave'>Ways to save</a></li>}
            </ul>
            <ul className="nav navbar-nav navbar-right">
            {this.props.link === 'Settings' ? <li className='active'><a href="#/settings">Welcome, User Name</a></li> : <li><a href="#/settings">Welcome, User Name</a></li>}
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
        {!this.props.link == '' ?
<li className="active">Dashboard > {this.props.link}</li>
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

export default  Navbar
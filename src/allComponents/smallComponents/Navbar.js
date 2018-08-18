import React, { Component } from 'react'

class Navbar extends Component {
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
            <li className="active"><a href="#">Dashboard</a></li>
            <li><a href="#">Transactions</a></li>
            <li><a href="#">Budgets</a></li>
            <li><a href="#">Ways to save</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Welcome, User Name</a></li>
            <li><a href="#">Logout</a></li>
            </ul>
        </div>
        </div>
    </nav>

    <header id="header">
        <div className="container">
        <div className="row">
            <div className="col-md-10">
            <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Manage Your Money</small></h1>
            </div>
            <div className="col-md-2">
            <div className="dropdown create">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Short Cuts 
                <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Change Bank Account</a></li>
                <li><a type="button" data-toggle="modal" data-target="#addPage">Add Goal</a></li>
                <li><a href="#">Add Bill</a></li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </header>
    

    <section id="breadcrumb">
        <div className="container">
        <ol className="breadcrumb">
            <li className="active">Dashboard</li>
        </ol>
        </div>
    </section>
    </div>
    )
}
}

export default  Navbar
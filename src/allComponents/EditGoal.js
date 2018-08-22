import React, { Component } from 'react'
import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Footer from './smallComponents/Footer'
import EditGoalForm from './smallComponents/EditGoalForm'

export default class EditGoal extends Component {
        constructor(props){
            super(props)
        }
    render() {
        return (
            <div>
                <NavBar link={'Goals'}/>
                <section id="main">
                <div className="container">
                    <div className="row">
                <SideNav link={'Goals'}/>
                    <div className="col-md-9">
                        <EditGoalForm ID={this.props.match.params.Id} history={this.props.history}/>
                    </div>
                    </div>
                </div>
                </section>
                <Footer />    
            </div>
        )
    }
}

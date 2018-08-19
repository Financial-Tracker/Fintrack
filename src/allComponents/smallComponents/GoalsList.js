import React, { Component } from 'react'

class GoalsList extends Component {
    constructor(){
        super()
    }
    deleteGoalHandler = (goalId) =>{
        console.log('delete goal with id:', goalId)
    }

  render() {
    return (
    <div className="panel panel-default">
    <div className="panel-heading main-color-bg">
    <h3 className="panel-title">Goals</h3>
    </div>
    <div className="panel-body">
    <div className="row">
            {/* <div className="col-md-12">
                <input className="form-control" type="text" placeholder="Filter Posts..." />
            </div> */}
    </div>
    <br />
    <table className="table table-striped table-hover">
        <tbody >
            <tr>
            <th>Goal</th>
            <th>How Much?</th>
            <th>Monthly Savings</th>
            <th>Created</th>
            <th>End Date</th>

            <th></th>
            </tr>
            <tr>
            <td>Buy A Car</td>
            <td>$700</td>
            <td>$30</td>
            <td>Dec 12, 2016</td>
            <td>Dec 12, 2016</td>
            <td><a className="btn btn-default" href="#/editgoal/1">Edit</a> <a className="btn btn-danger" onClick={()=>this.deleteGoalHandler(1)}>Delete</a></td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>

    )
  }
}

export default GoalsList
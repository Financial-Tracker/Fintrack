import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import moment from 'moment'
import 'react-day-picker/lib/style.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {connect} from 'react-redux'

import {addBill} from '../../Store/BillReducer'

class BillForm extends Component {
    constructor(){
        super()
        this.state = {
            Created : new Date().toLocaleDateString() ,
            billTitle : '',
            howMuch : '',
            additialInformation : '',
            howOften: '',
            endDate: '',
            paid: false
        }
    }
    onChangeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        }, () => {
            console.log(this.state)
        })
    }
    DateHandler = (day) => {
        this.setState({endDate: day.toLocaleDateString()});
    }
    onSubmitHandler = (evt) =>{
        evt.preventDefault()
        this.props.add(this.state)
    }
    dropDownChange = (event) => {
        this.setState({
            howOften: event.value
        })
    }
    
render() {
    var how_often = ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'Quarterly', 'Biannually','Yearly']
    return (
    <div>
    <div className="modal fade" id="addBillForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
    <div className="modal-content">
        <form onSubmit={this.onSubmitHandler}> 
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">Add A Bill</h4>
            </div>
            <div className="modal-body">
            <div className="form-group">
                <label>Bill Title</label>
                <input onChange={this.onChangeHandler} type="text" name='billTitle' className="form-control" placeholder="Bill Title" />
            </div>
            <div className="form-group">
                <label>How much ?</label>
                <input onChange={this.onChangeHandler} type="text" name='howMuch' className="form-control" placeholder="How much ?" />
            </div>
            <div className="form-group">
                <label>How Often ?</label>
                <Dropdown options={how_often} onChange={this.dropDownChange} value={this.state.howOften} placeholder="How often??" />
            </div>
            <div className="form-group">
                <label>End Date</label>
                <DayPicker 
                    onDayClick={this.DateHandler}
                />
                {this.state.selectedDay ? (
                <p>You clicked {this.state.selectedDay}</p>
                ) : (
                <p>Please select a day.</p>
                )}
            </div>
            <div className="form-group">
                <label>Additional Information realated to this goal (optional)</label>
                <textarea onChange={this.onChangeHandler} name="editor1" name='additialInformation' className="form-control" placeholder="Additional Information..." ></textarea>
            </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary main-color-bg">Save changes</button>
            </div>
        </form>
    </div>
    </div>
    </div>
    </div>
    )
}
}


const mapStateToProps = state => {
    return {
        bills: state.bills.allBills
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (bill) => {
            dispatch(addBill(bill))
        }
    }
}

const connectedBillForm = connect(mapStateToProps, mapDispatchToProps)

export default connectedBillForm(BillForm)
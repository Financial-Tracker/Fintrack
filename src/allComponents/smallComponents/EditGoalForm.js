import React, { Component } from 'react'
import {connect} from 'react-redux'
import DayPicker from 'react-day-picker';

import {getSingleGoal, editSingleGoal} from '../../Store/GoalReducer'
class EditGoalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Created: '',
      selectedDay: undefined,
      goalTitle: '',
      howMuch: '',
      additialInformation: '',
      error: null,
      isActive: true
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.DateHandler = this.DateHandler.bind(this)
    this.closeHandler = this.closeHandler.bind(this)
  } 
  async componentWillMount() {
    await this.props.fetchGoal(this.props.ID)
  }
  async onSubmitHandler(evt) {
    evt.preventDefault()
    await this.props.editGoal(this.state, this.props.ID)
    // window.alert('Goal saved')
    this.props.history.push('/goal') 
  }

  onChangeHandler(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
      Created: this.props.goal.Created
    })
  }
  DateHandler(day) {
    this.setState({ selectedDay: day.toLocaleDateString() });
  }
  closeHandler() {
    this.props.history.push('/goal') 
  }


  render() {
    return(
            <div className="modal-content">
              <form >
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Edit Goal</h4>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Goal Title</label>
                    <input onChange={this.onChangeHandler} value={this.state.goalTitle} type="text" name='goalTitle' className="form-control" placeholder={this.props.goal.goalTitle} />
                  </div>
                  <div className="form-group">
                    <label>How much ?</label>
                    <input onChange={this.onChangeHandler} value={this.state.howMuch} type="text" name='howMuch' className="form-control" placeholder={this.props.goal.howMuch} />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <DayPicker onDayClick={this.DateHandler} />
                    {this.state.selectedDay ? (
                      <p>You clicked {this.state.selectedDay}</p>
                      ) : (
                      <p>Please select a day.</p> )}
                  </div>
                  <div className="form-group">
                    <label>Additional Information realated to this goal (optional)</label>
                    <textarea onChange={this.onChangeHandler} value={this.state.additialInformation} name="editor1" name='additialInformation' className="form-control" placeholder={this.props.goal.additialInformation} ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeHandler}>Close</button>
                  <button onClick={this.onSubmitHandler} type="submit" className="btn btn-primary main-color-bg" data-dismiss="modal">Save changes</button>
                </div>
              </form>  
            </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goal: state.goals.allGoals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoal: (ID) => {
      dispatch(getSingleGoal(ID))
    },
    editGoal: (newGoal, ID) => {
      dispatch(editSingleGoal(newGoal, ID))
    }
  }
}

const connectedEditGoalForm = connect(mapStateToProps, mapDispatchToProps)

export default connectedEditGoalForm(EditGoalForm)
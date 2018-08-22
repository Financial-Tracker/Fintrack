import React, { Component } from "react";
import { connect } from "react-redux";
import DayPicker from "react-day-picker";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { getSingleBill, editSingleBill } from "../../Store/BillReducer";

class EditBillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Created: new Date().toLocaleDateString(),
      billTitle: "",
      howMuch: "",
      additialInformation: "",
      howOften: "",
      endDate: "",
      paid: false
    };
  }
  async componentDidMount() {
    this.props.getBill(this.props.ID);
  }
  onChangeHandler = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
        Created: this.props.bill.Created
      },
      () => {
        console.log(this.state);
      }
    );
  };
  DateHandler = day => {
    this.setState({ endDate: day.toLocaleDateString() });
  };
  closeHandler = () => {
    this.props.history.push("/bills");
  };
  dropDownChange = event => {
    this.setState({
      howOften: event.value
    });
  };
  onSubmitHandler = async (event) => {
    event.preventDefault()
    await this.props.editBill(this.state, this.props.ID)
    await this.props.history.push("/bills")
  }
  render() {
    console.log(this.props)
    var how_often = ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'Quarterly', 'Biannually','Yearly']
    return (
      <div className="modal-content">
        <form onSubmit={this.onSubmitHandler}>
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              Edit Bill
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Bill Title</label>
              <input
                onChange={this.onChangeHandler}
                value={this.state.billTitle}
                type="text"
                name="billTitle"
                className="form-control"
                placeholder={this.props.bill.billTitle}
              />
            </div>
            <div className="form-group">
              <label>How much ?</label>
              <input
                onChange={this.onChangeHandler}
                value={this.state.howMuch}
                type="text"
                name="howMuch"
                className="form-control"
                placeholder={this.props.bill.howMuch}
              />
            </div>
            <div className="form-group">
              <label>How Often ?</label>
              <Dropdown
                options={how_often}
                onChange={this.dropDownChange}
                value={this.state.howOften}
                placeholder={this.props.bill.howOften}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <DayPicker onDayClick={this.DateHandler} />
              {this.state.endDate ? (
                <p>You clicked {this.state.endDate}</p>
              ) : (
                <p>Please select a day.</p>
              )}
            </div>
            <div className="form-group">
              <label>
                Additional Information realated to this bill (optional)
              </label>
              <textarea
                onChange={this.onChangeHandler}
                value={this.state.additialInformation}
                name="editor1"
                name="additialInformation"
                className="form-control"
                placeholder={this.props.bill.additialInformation}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={this.closeHandler}
            >
              Close
            </button>
            <button
              // onClick={this.onSubmitHandler}
              type="submit"
              className="btn btn-primary main-color-bg"
              data-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bill: state.bills.allBills
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBill: billID => {
      dispatch(getSingleBill(billID));
    },
    editBill: (updatedBill, billID) => {
      dispatch(editSingleBill(updatedBill, billID))
    }
  };
};

const connectedEditBillForm = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedEditBillForm(EditBillForm);

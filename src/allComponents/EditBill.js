import React, { Component } from "react";
import NavBar from "./smallComponents/Navbar";
import SideNav from "./smallComponents/SideNav";
import Footer from "./smallComponents/Footer";
import EditBillForm from "./smallComponents/EditBillForm";

export default class EditBill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
              <div className="col-md-9">
                <EditBillForm
                  ID={this.props.match.params.Id}
                  history={this.props.history}
                />
              </div>
    );
  }
}

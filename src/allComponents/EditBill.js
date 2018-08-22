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
    console.log(this.props.match.params.Id);
    return (
      <div>
        <NavBar link={"Bills"} />
        <section id="main">
          <div className="container">
            <div className="row">
              <SideNav link={"Bills"} />
              <div className="col-md-9">
                <EditBillForm
                  ID={this.props.match.params.Id}
                  history={this.props.history}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

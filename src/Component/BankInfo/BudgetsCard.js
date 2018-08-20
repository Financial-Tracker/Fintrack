import React, { Component } from "react";
import { Table } from "reactstrap";

import ReactModal from "react-modal";

export default class BudgetsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    const section = this.props.section;
    const categories = this.props.categories;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };
    return (
      <React.Fragment>
        <tr>
          <th scope="row">{section}</th>
          <td>{categories[section].amount}</td>
          <td>
            <button onClick={this.handleOpenModal}>Click here</button>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              onRequestClose={this.handleCloseModal}
              style={customStyles}
            >
              <Table bordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Amount Spent</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {categories[section].list.map((item, index) => (
                    <tr key={index}>
                      <td> {item.name}</td>
                      <td>{item.amount}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <button onClick={this.handleCloseModal}>Exit</button>
            </ReactModal>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

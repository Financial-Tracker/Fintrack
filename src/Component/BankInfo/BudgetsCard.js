import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import {
  Dimmer,
  Loader,
  Segment,
  Header,
  Image,
  Modal
} from "semantic-ui-react";
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
    console.log(this);
    const section = this.props.section;
    const categories = this.props.categories;
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
                  {categories[section].list.map(item => (
                    <tr>
                      <td> {item.name}</td>
                      <td>{item.amount}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

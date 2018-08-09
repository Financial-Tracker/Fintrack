import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { auth } from "../Firebase";

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    auth.signOut();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>
          {" "}
          Welcome to FinTrack! Prince please design this page cuz i suck at this
          kind of stuff -Vic
        </h1>
        <Button
          color="blue"
          fluid
          size="large"
          name="logout"
          onClick={this.handleClick}
        >
          Log out
        </Button>
      </div>
    );
  }
}

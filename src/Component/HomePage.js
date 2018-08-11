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
import HomepageLayout from './Pages/HomepageHeading'


export default class Homepage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('hello')
    // event.preventDefault();
    // auth.signOut();
    // this.props.history.push("/");
  }

  render() {
    return (
      <div>
      <HomepageLayout logout={()=>(this.handleClick())}/>
      </div>
    );
  }
}

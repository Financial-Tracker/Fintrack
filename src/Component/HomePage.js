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
  }


  render() {
    return (
      <div>
      <HomepageLayout/>
      </div>
    );
  }
}

import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import { auth } from "../../Firebase";


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
    * such things.
    */
import logo from "./fintrack.png";

import "semantic-ui-css/semantic.min.css";


class HomepageLayout extends Component {
  render() {
    return (
      <div>
      <Link to= "/plaid">  
      <Button primary size="huge">
          Connect Bank
        <Icon name="right arrow" />
      </Button>
    </Link>
      </div>
    )
  }
}


export default HomepageLayout

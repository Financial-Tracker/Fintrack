import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  
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

import {
  Button,
  Navbar,
  NavItem,
  Parallax
} from 'react-materialize'
import {Link} from "react-router-dom";
import { auth } from "../../Firebase";
import logo from "./fintrack.png"; 
require('./allPages.css')



class HomepageLayout extends Component {
  render() {
    return (
      <div className='s1container'>
        <div className='link-to-plaid'> 
        <Link to= "/plaid">  
          <Button className='s1plaid-bttn ' primary size="huge">
              Connect Bank
            <Icon name="right arrow" />
          </Button>
        </Link>
        </div>
      </div>
    )
  }
}


export default HomepageLayout


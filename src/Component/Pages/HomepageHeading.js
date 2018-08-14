import React, { Component } from "react";
import {
  Button,
  Icon,
} from "semantic-ui-react";
import {Link} from "react-router-dom";



/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
    * such things.
    */

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

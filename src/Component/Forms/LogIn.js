import React, { Component } from "react";
import firebase from "firebase";
import {withAlert} from "react-alert"
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import { auth } from "../../Firebase";

import {valid} from './validation'

require("./cssForms.css");


class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error : false
    };
    this.handleChanger = this.handleChanger.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleClick() {
    const user = firebase.auth().currentUser;
    user
      ? this.props.history.push("/homepage")
      : this.props.history.push("/login");
  }

  handleChanger(event) {
    this.setState({
      error: false
    })
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if(valid(this.state.email,'email') && valid(this.state.password,'password')){
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => auth.logIn(this.state.email, this.state.password));
      const user = firebase.auth().currentUser;
      if (user) {
        this.props.alert.success('Log in success!')
        this.props.history.push("/homepage");
      } else {
        this.props.alert.error('Invalid login credentials!')
        this.props.history.push("/login");
      }
    }else {
      this.setState({
        error : true
      })
    }

  }
  render() {
    return (
      <div className="login-form forms">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2"  textAlign="center">
              Log-in to your account
            </Header>
            {this.state.error ? <h3 className='error'>Please make sure all information are valid</h3> : null}

            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
              { this.state.email.length > 0 ? valid(this.state.email,"email") ? null : <p className='error'>Enter a valid email </p> : null}
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handleChanger}
                  name="email"
                  value={this.state.email}
                />
                {this.state.password.length > 0 ? valid(this.state.password,"password") ? null : <p className='error'>Password must be within the length of 8-20</p> : null}
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  onChange={this.handleChanger}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
                <Button
                  color="blue"
                  fluid
                  size="large"
                  name="login"
                  type="submit"
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#/signup">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export default withAlert(LogIn)
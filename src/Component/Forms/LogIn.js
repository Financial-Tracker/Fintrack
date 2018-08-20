import React, { Component } from "react";
import firebase from "firebase";
import {withAlert} from "react-alert"
import {Link} from 'react-router-dom'
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
    event.preventDefault()
    if(valid(this.state.email,'email') && valid(this.state.password,'password')){
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => auth.logIn(this.state.email, this.state.password));
      const user = firebase.auth().currentUser;
      console.log(user)
      if (user) {
        this.props.alert.success('Log in success!')
        this.props.history.push("/");
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
      <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">FinTrack</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
  
          </div>
        </div>
      </nav>
  
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center"> FinTrack <small>All About The Green</small></h1>
            </div>
          </div>
        </div>
      </header>
  
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <form className="well" onSubmit={this.handleSubmit}>
              <h3 className='center'>Login</h3>
              {this.state.error ? <h4 className='error'>Please make sure all information are valid</h4> : null}
                    <div className="form-group">
                      <label>Email Address</label>

                      { this.state.email.length > 0 ? valid(this.state.email,"email") ? null : <p className='error'>Enter a valid email </p> : null}
                      <input type="text" className="form-control" 
                      placeholder="E-mail address"
                      onChange={this.handleChanger}
                      name="email"
                      value={this.state.email} 
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      {this.state.password.length > 0 ? valid(this.state.password,"password") ? null : <p className='error'>Password must be within the length of 8-20</p> : null}
                      <input type="password" 
                      className="form-control" 
                      placeholder="Password"
                      onChange={this.handleChanger}
                      type="password"
                      name="password"
                      value={this.state.password}
                      />

                    </div>
                    <button className="btn btn-default btn-block">Login</button>
                </form>
                    <Link to ='/signup'><button className="btn btn-default btn-block">New to us? Sign up</button></Link>
            </div>
          </div>
        </div>
        </section>
        </div>
    );
  }
}


{/* <Grid
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
    New to us? <Link to="/signup">Sign Up</Link>
  </Message>
</Grid.Column>
</Grid> */}

export default withAlert(LogIn)
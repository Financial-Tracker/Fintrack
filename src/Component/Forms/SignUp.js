import React, { Component } from "react";
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
import firebase from "firebase";
import {firestore} from '../../Firebase/firebase'
import {valid} from "./validation"
require("./cssForms.css");


export default class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName: '',
            email : '',
            password: '',
            Cpassword : '',
            error : false
        }
        this.handleChanger = this.handleChanger.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChanger(evt){

        // if (valid(evt) && evt.target.name !== 'Cpassword'){
        //     console.log(evt.target.name)
        //     console.log(evt.target.value)
        // }
        console.log(evt.target.name, evt.target.value)
        this.setState({
            error:false
        })
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    async handleSubmit(evt){
        evt.preventDefault()
        console.log(this.state)
        if((valid(this.state.firstName,'firstName') && valid(this.state.lastName,"lastName")) && (valid(this.state.email,"email") && valid(this.state.password,"password") && (this.state.password === this.state.Cpassword))) {
            // if all information are valid
        await auth.createUser(this.state.email, this.state.password)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            auth.logIn(this.state.email, this.state.password)
            firestore.collection("user").add({
                name: this.state.firstName + " " + this.state.lastName,
                email: this.state.email
            })
        })
        const user = firebase.auth().currentUser
        console.log(user)
        if(user){
            this.props.history.push('/');
        }else{
            this.props.history.push('/login')
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
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="navbar">
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
                <form className="well" onSubmit={this.handleSubmit} onChange={this.handleChanger}>
                <h3 className='center'>Sign up</h3>

                    <div className="form-group">
                        <label>First Name</label>
                        {this.state.firstName.length > 0 ? valid(this.state.firstName,"firstName") ? null : <p className='error'>Enter a valid first name </p> : null }
                        <input type="text" className="form-control" 
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName} 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Last Name</label>
                        {this.state.lastName.length > 0 ? valid(this.state.lastName,"lastName") ? null : <p className='error'>Enter a valid first name </p> : null }
                        <input type="text" className="form-control" 
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName} 
                        />
                    </div>


                    <div className="form-group">
                    {this.state.email.length > 0 ? valid(this.state.email,"email") ? null : <p className='error'>Enter a valid email </p> : null}
                        <label>Email Address</label>
                        <input type="text" className="form-control" 
                        placeholder="E-mail address"
                        name="email"
                        value={this.state.email} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        {this.state.password.length > 0 ? valid(this.state.password,"password") ? null : <p className='error'>Password must be within the length of 8-20</p> : null }
                        <input type="password" 
                        className="form-control" 
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        />
                    </div>


                        <div className="form-group">
                        <label>Confirm Password</label>
                        {this.state.password === this.state.Cpassword ? null :  <p className='error'> Password does not match</p>}
                        <input type="password" 
                        className="form-control" 
                        placeholder="Confirm Password"
                        type="password"
                        name="Cpassword"
                        value={this.state.Cpassword}
                        />
                    </div>
                    <button className="btn btn-default btn-block">Sign up </button>
                </form>
                    <Link to ='/login'><button className="btn btn-default btn-block">Have an account? Login</button></Link>
            </div>
            </div>
        </div>
        </section>
        </div>
        )
    }
}


            {/* <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>
                Sign up
                </Header>
                {this.state.error ? <h3 className='error'>Please make sure all information are valid</h3> : null}
                <Form size='large' onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
                <Segment stacked>
                
                    {this.state.firstName.length > 0 ? valid(this.state.firstName,"firstName") ? null : <p className='error'>Enter a valid first name </p> : null }
                    <Form.Input 
                    name='firstName'
                    fluid icon='user' 
                    iconPosition='left' 
                    placeholder='First Name' />


                    {this.state.lastName.length > 0 ? valid(this.state.lastName,"lastName") ? null : <p className='error'>Enter a valid first name </p> : null }
                    <Form.Input 
                    name='lastName'
                    fluid icon='user' 
                    iconPosition='left' 
                    placeholder='Last Name' />


                    {this.state.email.length > 0 ? valid(this.state.email,"email") ? null : <p className='error'>Enter a valid email </p> : null}
                    <Form.Input name='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' />


                    {this.state.password.length > 0 ? valid(this.state.password,"password") ? null : <p className='error'>Password must be within the length of 8-20</p> : null }
                    <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password'
                    />
                    
                
                    {this.state.password === this.state.Cpassword ? null :  <p className='error'> Password does not match</p>}
                    <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Password'
                    type='password'
                    name='Cpassword'
                    />
    
                    <Button  color='blue' fluid size='large'>
                    Sign up
                    </Button>
                </Segment>
                </Form>
                <Message>
                Have an account ? <Link to="/">Log in</Link>
                </Message>
            </Grid.Column>
            </Grid> */}
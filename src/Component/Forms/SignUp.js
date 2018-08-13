import React, { Component } from "react";
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

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnChange(evt){

        // if (valid(evt) && evt.target.name !== 'Cpassword'){
        //     console.log(evt.target.name)
        //     console.log(evt.target.value)
        // }
        this.setState({
            error:false
        })
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    async handleOnSubmit(evt){
        evt.preventDefault()
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
            this.props.history.push('/homepage');
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
            <div className='login-form'>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>
                Sign up
                </Header>
                {this.state.error ? <h3 className='error'>Please make sure all information are valid</h3> : null}
                <Form size='large' onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
                <Segment stacked>
                {/* first name  */}
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
                    
                    {/* <p className='error'> Password does not match</p> */}
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
                Have an account ? <a href='/'>Log in</a>
                </Message>
            </Grid.Column>
            </Grid>
        </div>
        )
    }
}

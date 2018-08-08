import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {auth} from '../../Firebase/index'
import firebase from 'firebase'
require('./cssForms.css')


export default class LogIn extends Component {

    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
        this.handleChanger = this.handleChanger.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChanger(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        auth.logIn(this.state.email, this.state.password)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>(
            auth.logIn(this.state.email, this.state.password)
        ))
        const user = firebase.auth().currentUser
        if(user){
            this.props.history.push('/homepage');
        }else{
            this.props.history.push('/login')
        }
    }
    render() {
            return (
                <div className='login-form forms'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                    Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}> 
                    <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address' 
                            onChange={this.handleChanger}
                            name='email'
                            value={this.state.email}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            onChange={this.handleChanger}
                            name='password'
                            value={this.state.password}
                        />
                        <Button color='blue' fluid size='large' type='submit'>Login</Button>
                    </Segment>
                        </Form>
                    <Message> New to us? <a href='#/signup'>Sign Up</a></Message>
                </Grid.Column>
                </Grid>
                </div>
        )
    }
}

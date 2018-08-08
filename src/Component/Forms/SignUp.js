import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

require('./cssForms.css')


export default class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName: '',
            email : '',
            password: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleOnSubmit(evt){
        evt.preventDefault()
        console.log(this.state)

    }
render() {
    return (
            <div className='login-form'>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>
                Sign up
                </Header>
                <Form size='large' onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
                <Segment stacked>
                    <Form.Input name='firstName' fluid icon='user' iconPosition='left' placeholder='First Name' />
                    <Form.Input name='lastName'fluid icon='user' iconPosition='left' placeholder='Last Name' />
                    <Form.Input name='email' fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password'
                    />
        
                    <Button color='blue' fluid size='large'>
                    Login
                    </Button>
                </Segment>
                </Form>
                <Message>
                Have an account ? <a href='#'>Log in</a>
                </Message>
            </Grid.Column>
            </Grid>
        </div>
        )
    }
    }

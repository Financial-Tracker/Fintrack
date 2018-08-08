import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

require('./cssForms.css')


export default class SignUp extends Component {
  render() {
    return (
            <div className='login-form'>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>
                Sign up
                </Header>
                <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    />
        
                    <Button color='blue' fluid size='large'>
                    Login
                    </Button>
                </Segment>
                </Form>
                <Message>
                New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
            </Grid>
        </div>
        )
    }
    }

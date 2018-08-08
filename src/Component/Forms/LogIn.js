import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

require('./cssForms.css')


export default class LogIn extends Component {

    constructor(){
        super()
        this.state = {

        }
        this.handleChanger = this.handleChanger.bind(this)
    }

    handleChanger(evt){
        console.log(evt)
    }
render() {
        return (
                <div className='login-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                    Log-in to your account
                    </Header>
                    <Form size='large' onChange={this.handleChanger}>
                    <Segment stacked>
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

                    New to us? <a href='#/signup'>Sign Up</a>
                    </Message>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}

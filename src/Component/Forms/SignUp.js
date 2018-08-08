import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
require('./cssForms.css')

export default class SignUp extends Component {
  render() {
    return (
        <div className='container'>
        <Form>
        <Form.Field>
                <label>First Name</label>
                <input placeholder='firstName ' />
        </Form.Field>
        <Form.Field>
                <label>Last Name</label>
                <input placeholder='lastName ' />
        </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input placeholder='Email ' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
            </Form.Field>
            {true ? <Button type='submit'>Submit</Button> : <Button basic loading type='submit'>Submit</Button>}
        </Form>
        </div>
    )
  }
}

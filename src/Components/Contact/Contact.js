import React from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'
import Heading from '../UI/Heading/Heading'
import './Contact.css'
import Button from '../UI/Button/Button'

function Contact() {
    return (
        <div id="contact">
            <Heading color={"#2c3e50"} title={"CONTACT ME"}/>
            <Form>
                <FormGroup>
                    <FormControl type="text" placeholder="Full Name" className="input" required/>
                </FormGroup><br />
                <FormGroup>
                    <FormControl type="email" placeholder="Email Address" className="input" required/>
                </FormGroup><br />
                <FormGroup>
                    <FormControl type="phone-number" placeholder="Phone Number" className="input" required/>
                </FormGroup><br />
                <FormGroup>
                    <FormControl 
                        as="textarea" 
                        placeholder="Message" 
                        style={{height: "150px"}} 
                        className="input" required/>
                </FormGroup><br />
                <Button name={"Send"}/>
            </Form>
        </div>
    )
}

export default Contact

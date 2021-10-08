import React from 'react'
import Heading from '../UI/Heading/Heading'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
import Button from '../UI/Button/Button'

function About() {
    return (
        <div className="background" id="about">
            <Heading color={"white"} bgcolor={"white"} title={"ABOUT"}/>
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <p className="p1">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </Col>
                    <Col xs={6} md={5}>
                        <p className="p2">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </Col>
                </Row>
            </Container>
            <Button name={"Free Download!"}/>
            <br /><br />
        </div>
    )
}

export default About

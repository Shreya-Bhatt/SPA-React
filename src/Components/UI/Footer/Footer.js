import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
    return (
        <>
        <div className="background-color">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <h3 className="h3">LOCATION</h3>
                        <p className="par">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h3 className="h3">ABOUT THE WEB</h3>
                        <i className="fab fa-facebook-f icon" style={{padding: "15px 23px"}}></i>
                        <i className="fab fa-twitter icon" style={{padding: "15px 20px"}}></i>
                        <i className="fab fa-linkedin-in icon" style={{padding: "15px 22px"}}></i>
                        <i className="fab fa-dribbble icon" style={{padding: "15px 20px"}}></i>
                    </Col>
                    <Col xs={6} md={4}>
                        <h3 className="h3">ABOUT FREELANCER</h3>
                        <p className="par">Freelance is a free to use, MIT licensed Bootstrap theme created by
                             <a href="http://startbootstrap.com"> Start Bootstrap</a>
                        .</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer">
            <small>Copyright &copy; Your Website 2021</small>
        </div>
        </>
    )
}

export default Footer

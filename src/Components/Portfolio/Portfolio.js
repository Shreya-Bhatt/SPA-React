import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../UI/Heading/Heading'
import './Portfolio.css'
import cabin from '../../assets/Images/portfolio/cabin.png'
import cake from '../../assets/Images/portfolio/cake.png'
import circus from '../../assets/Images/portfolio/circus.png'
import game from '../../assets/Images/portfolio/game.png'
import safe from '../../assets/Images/portfolio/safe.png'
import submarine from '../../assets/Images/portfolio/submarine.png'
import Model from '../UI/Modal/Modal'
import PortfolioItem from './PortfolioItem'


function Portfolio() {
    let images = [ 
        { name: cabin, title: "cabin"},
        { name: cake, title: "cake"},
        { name: circus, title: "circus"},
        { name: game, title: "game"},
        { name: safe, title: "safe"},
        { name: submarine, title: "submarine"}
    ];
    const [showModal, setShowModal] =  useState(false)
    const[ data, setData ] = useState(images[0]);
    const handleClick = (item) => {
        setData(item);
        setShowModal(true);
    };

    const hideModal = () => {
        setShowModal(false);
    };

    return (
        <div id="portfolio">
            <Heading color={"#2c3e50"} title={"PORTFOLIO"}/>
            <Container>
                <Row>
                    {images.map(function(image) {
                        return (
                            <Col sm={12} md={6} lg={4} key={image.name}>
                                <PortfolioItem name={image.name} title={image.title} onclick={handleClick}/>
                                <Model data={data} showModal={showModal} hideModal={hideModal}/>
                            </Col>
                        )} 
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio

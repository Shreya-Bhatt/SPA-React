import React from 'react'
import { Image } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import avataar from '../../assets/Images/avataaars.svg'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../UI/Footer/Footer'

function Header() {
    return (
        <div>
            <Navbar />
            <div className="bg-colour">
                <Image src={avataar} width={251} height={260} className="img"/>
                <h1 className="title">START BOOTSTRAP</h1>
                <div className="divider">
                    <div className="divider-line" style={{backgroundColor: "white"}}></div>
                    <div className="divider-icon" style={{color: "white"}}><i className="fas fa-star"></i></div>
                    <div className="divider-line" style={{backgroundColor: "white"}}></div>
                </div>
                <p className="para">Graphic Artist - Web Designer - Illustrator</p>
                <br />
            </div>
            <Portfolio />
            <About />
            <Contact /><br />
            <Footer />
        </div>
    )
}

export default Header

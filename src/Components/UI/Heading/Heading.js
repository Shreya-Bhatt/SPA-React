import React from 'react'
import './Heading.css'

function Heading(props) {
    let backgroundColor = {
        backgroundColor: props.bgcolor
    };
    let color = {
        color: props.color
    }

    return (
        <div>
            <h1 style={color} className="heading">{props.title}</h1>
            <div className="divider">
                <div className="divider-line" style={backgroundColor}></div>
                <div className="divider-icon" style={color}><i className="fas fa-star"></i></div>
                <div className="divider-line" style={backgroundColor}></div>
            </div>
        </div>
    )
}

export default Heading

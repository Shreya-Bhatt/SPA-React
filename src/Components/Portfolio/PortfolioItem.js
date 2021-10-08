import React from 'react'
import { Card } from 'react-bootstrap'

function PortfolioItem(props) {
    const {name, title, onclick} = props;
    const data = {name, title}

    return (
        <div>
            <button onClick={() => onclick(data)} className="btn">
                <Card className="text-white card">
                    <Card.Img src={name} alt={title} className="image-mb"/>
                    <Card.ImgOverlay className="card-overlay">
                        <Card.Text className="card-text">
                            <i className="fas fa-plus fa-3x"></i>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </button>
        </div>
    )
}

export default PortfolioItem

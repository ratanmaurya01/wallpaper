import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';


function CardView() {

    return (
        <>






            <Card >
                <Card.Body>

                    <Card.Title>Recent Posts</Card.Title>
                    <ul className="list-unstyled">
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">Data Structure</a></li>
                        <li><a href="#">Algorithm</a></li>
                        <li><a href="#">Computer Network</a></li>
                    </ul>
                </Card.Body>
            </Card>



        </>
    )
}

export default CardView

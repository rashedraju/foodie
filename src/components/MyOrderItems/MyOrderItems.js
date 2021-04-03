import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const MyOrderItems = ({ items }) => {
    const itemsEl = items.map((item) => (
        <Col className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <Card>
                <Card.Img variant="top" src={item.image} style={{ minHeight: '150px' }} />
                <Card.Body className="p-0">
                    <div className="text-center p-1">{item.title}</div>
                </Card.Body>
            </Card>
        </Col>
    ));
    return <Row className="justify-content-center">{itemsEl}</Row>;
};
export default MyOrderItems;

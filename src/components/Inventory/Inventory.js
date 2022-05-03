import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    return (
        <div className='container'>
            <h2>this is inventory page {id}</h2>
            <div>
                <Row xs={1} md={2} lg={1} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Title className='fw-light fs-1 text-center mt-4'>Bed Obsession-151</Card.Title>
                                <Card.Img className='p-3' variant="top" src="https://hatil.com/sites/default/files/Obsession-151%20Bed%20HATIL%20%20modern%20bedroom%20online%20buy%20Bangladesh%20low%20price.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <p className='fw-light fs-4'>Price: 42.100</p>
                                        <p className='fw-bold'>Quantity: 20</p>
                                        <p><small>Supplier Name: Hatil Furniture</small></p>
                                        A bed is the central furniture in a bedroom. While relaxing, we spend most of the time on a bed. Considering the fact, obsession-151 beds are highly well-built. They are strong and durable enough to last longer

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Inventory;
import React from 'react';
import { Card, Col } from 'react-bootstrap';


const MyItemCard = ({product}) => {
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img className='img-fluid p-2 w-100' variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title className='fs-3'>{product.name}</Card.Title>
                            <Card.Text>
                                <p className='fw-light'>Price: {product.price}</p>
                                <p className='fw-bold'>Quantity: {product.quantity}</p>
                                <p><small>Supplier Name: {product.supplier}</small></p>
                                {product.description}
                            </Card.Text>
                            <button className='btn btn-danger w-100'>Delete</button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
};

export default MyItemCard;
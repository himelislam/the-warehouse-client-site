import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
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
                            <Link to={`inventory/${product._id}`}><button className='btn btn-secondary w-100'>Update</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
};

export default ProductCard;


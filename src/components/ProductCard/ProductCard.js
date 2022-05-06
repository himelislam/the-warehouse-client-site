import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className='rounded'>
                        <Card.Img className='img-fluid p-2 w-100 rounded' variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title className='fs-3'>{product.name}</Card.Title>
                            <Card.Text>
                                <h6 className='fw-light'>Price: {product.price}</h6>
                                <h6 className='fw-bold'>Quantity: {product.quantity}</h6>
                                <h6><small>Supplier Name: {product.supplier}</small></h6>
                                {product.description.slice(0,200)}
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


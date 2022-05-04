import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Update Inventory{id}</h2>
            <div>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="https://hatil.com/sites/default/files/Obsession-151%20Bed%20HATIL%20%20modern%20bedroom%20online%20buy%20Bangladesh%20low%20price.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body> */}
                            <Card.Title className='fw-semibold fs-1 text-center mt-4'>Product Details</Card.Title>
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
                    <Col>
                        <Card>
                            <Card.Title className='fw-semibold fs-1 text-center mt-4'>Delever and Restock</Card.Title>
                            <div className='border border-dark rounded p-4 m-3'>
                                <h2 className='text-center fw-light mb-3'>Delever Product</h2>
                                <h4 className='text-center fw-light mb-3'>Product Name : Bed Obbsession</h4>
                                <h5 className='text-center fw-light mb-3'>Product Quantity : 20</h5>
                                <button className='btn btn-secondary w-100'>Delevered</button>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='border border-dark rounded p-4 my-4'>
                                        <p className='fw-light fs-2 text-center my-4'>Restock The Item</p>
                                        <h4 className='text-center fw-light mb-3'>Product Name : Bed Obbsession</h4>
                                        <h5 className='text-center fw-light mb-3'>Product Quantity : 20</h5>
                                        <form className='text-center mb-4'>
                                            <input className='bg-white d-block w-100 rounded' type="number" name="quantity" id="" />
                                            <input className='btn btn-secondary w-100 my-3' type="submit" value="Restock" />
                                        </form>
                                    </div>
                                    <Link to='/manageInventory'><button className='btn btn-dark w-100 mx-auto d-block p-4 fs-5 text-decoration-none mt-4'>Manage Inventories</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ))} */}
                </Row>
            </div>
        </div>
    );
};

export default Inventory;
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        const url = `https://young-spire-99179.herokuapp.com/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[isReload])

    const handleDeleverItem = id => {
        const url = `https://young-spire-99179.herokuapp.com/product/${id}`
        fetch(url, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                setIsReload(!isReload)
                toast('One Item Delevered Successfully')
            }
        })
    }

    const handleRestockItem = event =>{
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(product.quantity);
        const url = `https://young-spire-99179.herokuapp.com/product/restock/${id}`
        fetch(url, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                setIsReload(!isReload);
                toast('New Stock Added Successfully')
                event.target.reset()
            }
        })
    }
    return (
        <div style={{minHeight : '70vh'}} className='container'>
            <h2 className='text-center my-4'>Update Product</h2>
            <div>
                <Row xs={1} md={2} lg={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Title className='fw-semibold fs-2 text-center mt-4'>Product Details</Card.Title>
                            <Card.Img className='p-3' variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Text>
                                    <p className='fw-light fs-4'>Price: {product.price}</p>
                                    <p className='fw-bold'>Quantity: {product.quantity}</p>
                                    <p><small>Supplier Name: {product.supplier}</small></p>
                                    <h6>Sold: {product.sold}</h6>
                                    <p>{product.description}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title className='fw-semibold fs-2 text-center mt-4'>Delever and Restock</Card.Title>
                            <div className='border border-dark rounded p-4 m-3'>
                                <h2 className='text-center fw-light mb-3'>Delever Product</h2>
                                <h4 className='text-center fw-light mb-3'>Product Name : {product.name}</h4>
                                <h5 className='text-center fw-light mb-3'>Product Quantity : {product.quantity}</h5>
                                <button onClick={()=>handleDeleverItem(product._id)} className='btn btn-dark w-100'>Delevered</button>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <div className='border border-dark rounded p-4 my-4'>
                                        <p className='fw-light fs-2 text-center my-4'>Restock The Product</p>
                                        <h4 className='text-center fw-light mb-3'>Product Name : {product.name}</h4>
                                        <h5 className='text-center fw-light mb-3'>Product Quantity : {product.quantity}</h5>
                                        <form onSubmit={handleRestockItem} className='text-center mb-4'>
                                            <input className='bg-white d-block w-100 rounded p-2 border border-dark' type="number" name="quantity" id="" />
                                            <input className='btn btn-dark w-100 my-3' type="submit" value="Restock" />
                                        </form>
                                    </div>
                                    <Link to='/manageInventory'><button className='btn btn-dark w-100 mx-auto d-block p-4 fs-5 fw-bold text-decoration-none mt-4'>Manage Inventories</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Inventory;
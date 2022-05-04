import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
    
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Add New Item</h2>
           

            <div className='border border-dark p-4'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='bg-dark b-none text-white p-3' name="name" type="text" placeholder="Product Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='bg-dark b-none text-white p-3' name="price" type="number" placeholder="Price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="quantity" type="number" placeholder="Quantity" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="supplier" type="text" placeholder="Supplier Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="description" type="text" placeholder="Short Description" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="img" type="text" placeholder="Image URL" required />
                    </Form.Group>

                    <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 d-block fw-light' variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItems;
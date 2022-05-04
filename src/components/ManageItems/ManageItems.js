import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TableRow from '../TableRow/TableRow';

const ManageItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Manage Inventory</h2>
            <Link to='/addItem'><button className='btn btn-secondary w-50 p-2 mx-auto d-block my-4'>Add New Item</button></Link>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quanity</th>
                        <th>Supplier</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <TableRow key={product.id} product={product}></TableRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageItems;
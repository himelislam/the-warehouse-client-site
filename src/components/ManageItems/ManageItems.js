import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TableRow from '../TableRow/TableRow';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[isReload])

    const handleDeleteItem = (id) => {
        const url = `http://localhost:5000/product/${id}`
        const proceed = window.confirm('Are you Sure to Delete this Item?')
        if(proceed){
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    setIsReload(!isReload)
                }
            })    
        }
    }
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
                        products.map(product => <TableRow 
                            key={product._id} 
                            product={product}
                            handleDeleteItem={handleDeleteItem} 
                        ></TableRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageItems;
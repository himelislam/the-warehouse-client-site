import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import TableRow from '../TableRow/TableRow';

const ManageItems = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const [productId, setProductId] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://young-spire-99179.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])

    useEffect(() => {
        const url = `https://young-spire-99179.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                fetch(`https://young-spire-99179.herokuapp.com/myItems/${data._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({email : user.email})
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast('Item Selected Successfully')
                        }
                    })
            })
    }, [productId])

    const handleDeleteItem = (id) => {
        const url = `https://young-spire-99179.herokuapp.com/product/${id}`
        const proceed = window.confirm('Are you Sure to Delete this Item?')
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setIsReload(!isReload)
                    }
                })
        }
    }

    const handleUpdateItem = (id) => {
        navigate(`/inventory/${id}`)
    }

    const handleSelectedItem = id => {
        setProductId(id)
    }
    return (
        <div style={{minHeight : '70vh'}} className='container'>
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
                        <th>Update</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <TableRow
                            key={product._id}
                            product={product}
                            handleDeleteItem={handleDeleteItem}
                            handleUpdateItem={handleUpdateItem}
                            handleSelectedItem={handleSelectedItem}
                        ></TableRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageItems;
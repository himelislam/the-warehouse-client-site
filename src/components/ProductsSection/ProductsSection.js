import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-5 container'>
            <h2 className='text-center fw-light my-4'>Inventory Products {products.length}</h2>
            <div className=''>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.slice(0, 6).map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
                </Row>
            </div>
            
                <Link to='/manageInventory'><button className='btn btn-dark text-center w-50 p-2 d-block mx-auto my-4'>Manage Inventory</button></Link>
           
        </div>
    );
};

export default ProductsSection;
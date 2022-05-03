import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const Inventories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-5'>
            <h2 className='text-center fw-light my-4'>Inventory Products {products.length}</h2>
            <div className='container'>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.slice(0, 6).map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Inventories;
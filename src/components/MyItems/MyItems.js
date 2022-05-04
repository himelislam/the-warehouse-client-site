import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center my-4'>My Items {products.length}</h2>
            <div className=''>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.slice(0, 6).map(product => <MyItemCard
                        key={product.id}
                        product={product}
                    ></MyItemCard>)
                }
                </Row>
            </div>
        </div>
    );
};

export default MyItems;
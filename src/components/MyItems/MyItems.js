import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myItems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])

    const handleDeleteMyItem = id => {
        console.log('clicked', id);
        const url = `http://localhost:5000/myItems/${id}`;
        const procced = window.confirm('Are You Sure to Delete This Product?');
        if(procced){
            fetch(url, {
                method : 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    setIsReload(!isReload)
                    alert('Product Deleted Successfully!')
                }
            })
        }
    }
    
    return (
        <div className='container'>
            <h2 className='text-center my-4'>My Items {products.length}</h2>
            <div className=''>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.slice(0, 6).map(product => <MyItemCard
                        key={product.id}
                        product={product}
                        handleDeleteMyItem={handleDeleteMyItem}
                    ></MyItemCard>)
                }
                </Row>
            </div>
        </div>
    );
};

export default MyItems;
import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `https://young-spire-99179.herokuapp.com/myItems?email=${email}`
            try{
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                console.log(data);
                setProducts(data);
            }
            catch(error){
                if(error.response.status === 401 || error.response.status === 403){
                    navigate('/login');
                    signOut(auth)
                }
            }
        }
        getMyItems()
    }, [isReload])

    const handleDeleteMyItem = id => {
        console.log('clicked', id);
        const url = `https://young-spire-99179.herokuapp.com/myItems/${id}`;
        console.log(url);
        const procced = window.confirm('Are You Sure to Delete This Product?');
        if (procced) {
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        console.log(data);
                        setIsReload(!isReload)
                        alert('Product Deleted Successfully!')
                    }
                })
        }
    }

    return (
        <div style={{minHeight : '70vh'}} className='container'>
            <h2 className='text-center my-4'>My Items {products.length}</h2>
            <div className=''>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products?.map(product => <MyItemCard
                            key={product._id}
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
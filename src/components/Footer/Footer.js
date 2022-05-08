import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center mt-4 bg-dark py-4 text-white'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12 my-4'>
                    <h6>Your Services</h6>
                    <Link to='/blogs' style={{ textDecoration: 'none' }} ><span className='d-block text-white text-decoration-none'>Blogs</span></Link>
                    <Link to='/manageInventory' style={{ textDecoration: 'none' }} ><span className='d-block text-white text-decoration-none'>Manage Product</span></Link>
                    <Link to='/addItem' style={{ textDecoration: 'none' }} ><span className='d-block text-white text-decoration-none'>Add Product</span></Link>
                    <Link to='/myItem' style={{ textDecoration: 'none' }} ><span className='d-block text-white text-decoration-none'>My Products</span></Link>
                    <Link to='/login' style={{ textDecoration: 'none' }} ><span className='d-block text-white text-decoration-none'>Login</span></Link>
                    <Link to='/signup' style={{ textDecoration: 'none' }} ><span className='d-block text-white text-decoration-none'>Sign Up</span></Link>
                </div>
                <div className='col-lg-6 col-md-6 col-12 my-4'>
                    <h6>Our Partners</h6>
                    <span className='d-block'>Transport</span>
                    <span className='d-block'>Trans Global</span>
                    <span className='d-block'>Fedaral Express Delivery</span>
                    <span className='d-block'>Cargo Company</span>
                    <span className='d-block'>World Ships</span>
                    <span className='d-block'>WareHouse</span>
                </div>
            </div>
            <div>
                <p>All rights Reserved @ Himel Islam</p>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';

const Testimonials = () => {
    return (
        <div className='container my-4'>
            <h2 className='fw-light text-center my-4'>Tesimonials</h2>
            <hr />
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-12 text-center rounded p-4'>
                    <img className='rounded-circle mb-3' src="https://themes.flexipress.xyz/transpress/wp-content/uploads/2016/05/team2-min-100x100.jpg" alt="" />
                    <p className='fw-light'>We have been using The Warehouse for many many years and have always received a first class service, all staff are very helpful and friendly.</p>
                    <h4>DONALD WRIGHT</h4>
                    <h6>Commercial Manager</h6>
                </div>
                <div className='col-lg-4 col-md-6 col-12 text-center rounded p-4'>
                    <img className='rounded-circle mb-3' src="https://themes.flexipress.xyz/transpress/wp-content/uploads/2016/05/team1-min-100x100.jpg" alt="" />
                    <p className='fw-light'>The Warehouse have provided a vital link in our distribution network for many years. Service and reliability are a key aspect of the service we receive.</p>
                    <h4>CORY TAYLOR</h4>
                    <h6>Service Administrator</h6>
                </div>
                <div className='col-lg-4 col-md-6 col-12 text-center rounded p-4'>
                    <img className='rounded-circle mb-3' src="https://themes.flexipress.xyz/transpress/wp-content/uploads/2016/05/team3-min-100x100.jpg" alt="" />
                    <p className='fw-light'>Prior to working with The Warehouse, we handled our logistics internally, which proved to be extremely time consuming.</p>
                    <h4>REBECCA PHILLIPS</h4>
                    <h6>President and COO</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
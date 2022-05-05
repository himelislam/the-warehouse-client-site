import React from 'react';
import Banner from '../Banner/Banner';
import OurPartners from '../OurPartners/OurPartners';
import ProductsSection from '../ProductsSection/ProductsSection';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div  style={{minHeight : '70vh'}}>
            <Banner></Banner>
            <ProductsSection></ProductsSection>
            <Testimonials></Testimonials>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;
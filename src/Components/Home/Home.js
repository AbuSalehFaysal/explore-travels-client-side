import React from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../TopBanner/TopBanner';
import Trips from '../Trips/Trips';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Trips></Trips>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Footer from '@/shared/Footer/Footer';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Footer />
        </div>
    );
};

export default Homepage;
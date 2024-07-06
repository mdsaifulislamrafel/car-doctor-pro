import React from 'react';
import Banner from './Banner';
import About from './About';
import Footer from '@/shared/Footer/Footer';
import Services from './Services';

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
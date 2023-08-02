import React from 'react';
import BestPhoto from '../BestPhoto/BestPhoto';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import Contact from './Contact/Contact';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <BestPhoto></BestPhoto>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;
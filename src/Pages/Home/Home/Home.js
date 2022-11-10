import React from 'react';
import BestPhoto from '../BestPhoto/BestPhoto';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <BestPhoto></BestPhoto>
        </div>
    );
};

export default Home;
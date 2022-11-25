import React from 'react';
import Reviews from '../MyRivew/Reviews/Reviews';
import Banner from './Banner/Banner';
import FavoriteBrand from './FavoriteBrand/FavoriteBrand';
import Trust from './Trust/Trust';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <FavoriteBrand></FavoriteBrand>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import FavoriteBrand from './FavoriteBrand/FavoriteBrand';
import Trust from './Trust/Trust';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <FavoriteBrand></FavoriteBrand>
        </div>
    );
};

export default Home;
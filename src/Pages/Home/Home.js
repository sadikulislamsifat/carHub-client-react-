import React from 'react';
import useTitle from '../../hooks/useTitle/useTitle';
import Reviews from '../MyRivew/Reviews/Reviews';
import Tutorial from '../Tutorial/Tutorial';
import Banner from './Banner/Banner';
import FavoriteBrand from './FavoriteBrand/FavoriteBrand';
import Trust from './Trust/Trust';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <FavoriteBrand></FavoriteBrand>
            <Tutorial></Tutorial>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
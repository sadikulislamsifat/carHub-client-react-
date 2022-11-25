import React from 'react';
import banner1 from '../../../assest/banner/1.jpg';
import banner2 from '../../../assest/banner/2.jpeg';
import banner3 from '../../../assest/banner/3.jpg';
import banner4 from '../../../assest/banner/4.jpg';
import banner5 from '../../../assest/banner/5.jpg';
import banner6 from '../../../assest/banner/6.jpg';
import BannerItem from './BannerItem';

const bannerData = [
  {
      image: banner1,
      prev: 6,
      id: 1,
      next: 2
  },
  {
      image: banner2,
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: banner3,
      prev: 2,
      id: 3,
      next: 4
  },
  {
      image: banner4,
      prev: 3,
      id: 4,
      next: 5
  },
  {
      image: banner5,
      prev: 4,
      id: 5,
      next: 6
  },
  {
      image: banner6,
      prev: 5,
      id: 6,
      next: 1
  },
]

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full py-12">
        {
            bannerData.map(slide => <BannerItem
            key={slide.id}
            slide={slide}></BannerItem>)
        }
  
</div>
        </div>
    );
};

export default Banner;
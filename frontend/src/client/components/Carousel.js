import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // You need to install this library
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="rounded-lg shadow-lg">
      <div>
        <img src= "https://cdn.pixabay.com/photo/2015/06/24/15/45/computer-820281_1280.jpg" alt="Slide 1" />
        <p className="legend">Discover Our Latest Posts</p>https
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg" alt="Slide 2" />
        <p className="legend">Explore Tech Insights</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg" alt="Slide 3" />
        <p className="legend">Stay Updated With Trends</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

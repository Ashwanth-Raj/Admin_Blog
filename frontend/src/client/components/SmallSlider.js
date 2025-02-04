import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // You need to install SwiperJS
// import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.css'

const SmallSlider = () => {
  const sliderData = [
    { img: 'https://via.placeholder.com/400x200.png?text=Tech+Posts', text: 'Tech Posts' },
    { img: 'https://via.placeholder.com/400x200.png?text=Programming', text: 'Programming Insights' },
    { img: 'https://via.placeholder.com/400x200.png?text=Web+Development', text: 'Web Development' },
    { img: 'https://via.placeholder.com/400x200.png?text=Latest+Trends', text: 'Latest Trends' },
  ];

  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">Explore More Topics</h2>
      <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true }} breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
      }}>
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img src={slide.img} alt={slide.text} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-4 text-center">{slide.text}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmallSlider;

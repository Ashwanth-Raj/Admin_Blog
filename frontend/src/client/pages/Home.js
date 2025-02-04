import React from 'react';
import CarouselComponent from '../components/Carousel';
import RecentBlogs from '../components/RecentPosts';
import SmallSlider from '../components/SmallSlider';


const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <section className="mb-12">
        <CarouselComponent />
      </section>

      {/* Recent Blogs Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12">
        <RecentBlogs />
      </section>

      {/* Small Slider Section */}
      {/* <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-12">
        <SmallSlider />
      </section> */}

      {/* Additional Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-4">Be part of our growing blog community. Share insights, comment, and like our posts!</p>
          <a href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;

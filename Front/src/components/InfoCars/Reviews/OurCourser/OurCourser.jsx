import React from 'react';
import './OurCourser.css';
import { assets } from '../../../../assets/assets';

const OurCourses = () => {
  return (
    <section className="our-courses">
      <div className="text-container">
        <h1>Our Courses</h1>
        <h3>Buy two courses for the price of one</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="image-container">
        <img src={assets.uno} alt="Courses Preview" />
      </div>
    </section>
  );
};

export default OurCourses;

import './HeroCarousel.css';
import React, { useEffect, useRef } from 'react';

import eagle from '../../assets/port/eagel1.jpg';
import owl1 from '../../assets/port/owl1.jpg';
import crow from '../../assets/port/crow.jpg';
import butterfly1 from '../../assets/port/butterfly1.jpeg';
import owl2 from '../../assets/port/owl2.jpg';

//import nueve from '../../assets/rueda/nueve.jpg';
//import veintiseis from '../../assets/rueda/vieintiseis.jpg';
//import DJI_0437 from '../../assets/marañon/DJI_0437.jpg';
//
//import DJI_0491_HDR from '../../assets/marañon/DJI_0491-HDR.jpg';
//import DSC00928 from '../../assets/marañon/DSC00928.jpg';
//import DJI_0551 from '../../assets/marañon/DJI_0551.jpg';
//import DSC00314 from '../../assets/marañon/DSC00314.jpg';
//import DSC00383 from '../../assets/marañon/DSC00383.jpg';
//import DSC00450 from '../../assets/marañon/DSC00450.jpg';
//import DSC00500 from '../../assets/marañon/DSC00500.jpg';

const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const list = listRef.current;
    const runningTime = runningTimeRef.current;

    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');

    let timeRunning = 3000; // Tiempo de animación
    let timeAutoNext = 7000; // Tiempo entre cada slide automático

    const showSlider = (type) => {
      const items = list.querySelectorAll('.item');

      if (type === 'next') {
        list.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        list.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }

      setTimeout(() => {
        carousel.classList.remove('next', 'prev');
      }, timeRunning);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      runningTime.style.animation = 'none';
      runningTime.offsetHeight; // Reflow
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    const handleNext = () => showSlider('next');
    const handlePrev = () => showSlider('prev');

    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);

    const autoNext = setInterval(() => {
      showSlider('next');
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      nextBtn.removeEventListener('click', handleNext);
      prevBtn.removeEventListener('click', handlePrev);
      clearInterval(autoNext);
    };
  }, []);

  const items = [
    { name: 'EAGLE', image: eagle },
    { name: 'OWL', image: owl1 },
    { name: 'CROW', image: crow },
    { name: 'BUTTERFLY', image: butterfly1 },
    { name: 'OWL', image: owl2 },
    //{ name: 'RUEDA NUEVE', image: nueve },
    //{ name: 'RUEDA VEINTISEIS', image: veintiseis },
    //{ name: 'MARAÑON', image: DJI_0437 },
    //{ name: 'HDR', image: DJI_0491_HDR },
    //{ name: 'DSC00928', image: DSC00928 },
    //{ name: 'DSC00314', image: DSC00314 },
  ];

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content">
              <h3>{item.name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="prev" aria-label="Previous Slide">&lt;</button>
        <button className="next" aria-label="Next Slide">&gt;</button>
      </div>
      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default HeroCarousel;

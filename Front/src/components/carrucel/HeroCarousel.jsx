import './HeroCarousel.css';
import React, { useEffect, useRef } from 'react';


import veintiseis from '../../assets/rueda/vieintiseis.jpg';
import DJI_0491_HDR from '../../assets/marañon/DJI_0491-HDR.jpg';
import nueve from '../../assets/rueda/nueve.jpg';
// import owl1 from '../../assets/port/owl1.jpg';
// import crow from '../../assets/port/crow.jpg';
// import butterfly1 from '../../assets/port/butterfly1.jpeg';
// import owl2 from '../../assets/port/owl2.jpg';
// import eagel3 from '../../assets/port/eagel3.jpg';
// import kingfisher2 from '../../assets/port/kingfirser2.jpeg';
// import parrot2 from '../../assets/port/parrot2.jpg';
// import heron from '../../assets/port/heron.jpeg';
// import butterfly2 from '../../assets/port/butterfly2.jpg';

//import diesciseis from '../../assets/rueda/diesciseis.jpg';
import DJI_0437 from '../../assets/marañon/DSC00626.jpg';
//import DSC00928 from '../../assets/marañon/DSC00928.jpg'
//import DJI_0551 from '../../assets/marañon/DJI_0551.jpg'
//import DSC00314 from '../../assets/marañon/DSC00314.jpg'
//import DSC00383 from '../../assets/marañon/DSC00383.jpg'
//import DSC00450 from '../../assets/marañon/DSC00450.jpg'
//import DSC00500 from '../../assets/marañon/DSC00500.jpg'


const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  useEffect(() => {
    const nextBtn = carouselRef.current.querySelector('.next');
    const prevBtn = carouselRef.current.querySelector('.prev');
    const list = listRef.current;
    const runningTime = runningTimeRef.current;

    let timeRunning = 3000;
  let timeAutoNext = 7000;

    const showSlider = (type) => {
      const sliderItemsDom = list.querySelectorAll('.item');
      if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carouselRef.current.classList.add('next');
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carouselRef.current.classList.add('prev');
      }

      setTimeout(() => {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.remove('prev');
      }, timeRunning);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      runningTime.style.animation = 'none';
      runningTime.offsetHeight; // Trigger reflow
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    const handleNext = () => showSlider('next');
    const handlePrev = () => showSlider('prev');

    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);

    const autoNext = setInterval(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      nextBtn.removeEventListener('click', handleNext);
      prevBtn.removeEventListener('click', handlePrev);
      clearInterval(autoNext);
    };
  }, []);

  const items = [
   
    { name: 'Tarapoto', image: nueve },
    { name: 'Al Equipo ', image: veintiseis },
    { name: 'Marañon', image:  DJI_0491_HDR },
    { name: 'Jaen', image: DJI_0437 },

    // { name: 'BUTTERFLY', image: DSC00928 },
  
    // { name: 'EAGLE', image: DJI_0551 },
    // { name: 'KINGFISHER', image: DSC00450},
    // { name: 'PARROT', image: DSC00314 },
    // { name: 'HERON', image: DSC00383 },
    // { name: 'BUTTERFLY', image: DSC00500 },
  ];

  return (
    <div>
      <header>
        <nav>
         
         
        </nav>
      </header>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {items.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <div className="title">CONOCE</div>
                <div className="name">{item.name}</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis culpa similique consequuntur, reprehenderit dicta
                  repudiandae.
                </div>
                <div className="btn">
                  <button>See More</button>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button className="prev">&lt;</button>
          <button className="next">&gt;</button>
        </div>

        <div className="timeRunning" ref={runningTimeRef}></div>
      </div>
    </div>
  );
};

export default HeroCarousel;
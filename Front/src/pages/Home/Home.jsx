// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./Home.css";
import Properties from "../../components/Hero/Properties";
import StepsCards from "../../components/InfoCars/StepsCards/StepsCards";
import HeroCarousel from "../../components/carrucel/HeroCarousel";

const Home = () => {


  return (
    <div className="home">
      <HeroCarousel/>

      <Properties />
      
      <StepsCards />

      {/* Si se necesita el componente Cart, descomenta esta línea */}
      {/* <Cart /> */}
    </div>
  );
};

export default Home;

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./Home.css";
import Properties from "../../components/Hero/Properties";
import StepsCards from "../../components/InfoCars/StepsCards/StepsCards";
import PropertyCard from "../../components/InfoCars/PropertyCards/PropertyCards";
// Importar Cart si es necesario más adelante
// import Cart from "../Cart/Cart";

const Home = () => {


  return (
    <div className="home">

      <Properties />
      
      <StepsCards />

      {/* Si se necesita el componente Cart, descomenta esta línea */}
      {/* <Cart /> */}
    </div>
  );
};

export default Home;

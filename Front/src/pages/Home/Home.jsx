// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
//  import ExplorerMenu from '../../components/ExplorerMenu/ExplorerMenu'
//  import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
//  import Carousel from '../../components/carrucel/Carousel'
import Properties from '../../components/Hero/Properties'
import InfoCards from '../../components/InfoCars/InfoCars'
import StepsCards from '../../components/InfoCars/StepsCards/StepsCards'
import PropertyCard from '../../components/InfoCars/PropertyCards/PropertyCards'
import AppDownload from '../../components/AppDownloand/AppDownload'
import OurHistory from '../Cart/Our/OurHistory'
import Reviews from '../../components/InfoCars/Reviews/Review'
import OurCourses from '../../components/InfoCars/Reviews/OurCourser/OurCourser'
import VideoTutorials from '../../components/InfoCars/Videos/VideoTutoriales'
import VideoPortada from '../../components/InfoCars/Videos/VideoPortada/VideoPortada'



const Home = () => {
    const[category,setCategory]= useState('All')
  return (
    <div className='home'>

      
      
      
      
       
      
      <Properties/>
      <OurHistory/>
     <StepsCards/>

      
      
      <Reviews/>
     
      
      <AppDownload/>
     

      
    </div>
  )
}

export default Home

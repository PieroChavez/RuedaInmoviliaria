/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
            

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]= useState('menu');    
    const {getTotalCartAmount}=useContext(StoreContext);


  return (
<div className='navbar'>

  <ul className="navbar-menu"> 
  <Link     to="/"           onClick={() => setMenu("home")}           className={menu === "home" ? "active" : ""}        >          Inicio        </Link>
   <Link     to="/agente"           onClick={() => setMenu("agente")}           className={menu === "agente" ? "active" : ""}  >     Agente            </Link>
   <Link    to="/proyectos"    onClick={() => setMenu("proyecto")}        className={menu === "proyecto" ? "active" : ""}     >       Proyecto      </Link>
   <Link    to="/contact"    onClick={() => setMenu("contact")}        className={menu === "contact" ? "active" : ""}     >          Contacto      </Link>


  </ul>


  <Link to='/'   href='#home' onClick={() => setMenu("home")}  > <h1><img src={assets.logo} alt="" className="logo" /></h1></Link>

  
  
  <div className="navbar-right">
   
    {/* <button onClick={() => setShowLogin(true)}>
      <p className='iniciar'>Información</p>
    </button> */}
  </div>
</div>
  )
}

export default Navbar
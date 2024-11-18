/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';


// src/main.jsx


import {BrowserRouter} from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />  
     </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
    
)

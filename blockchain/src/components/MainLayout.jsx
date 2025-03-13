import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Login from '../Login';
import Home from '../Home';
import Formulario from '../Formulario'
import Transacciones from '../Transacciones'; 
import Sidebar from './Sidebar';
import "./MainLayout.css";

const MainLayout = () =>{
    const location = useLocation();
  return(
    
    <div className='main-layout'>
        {location.pathname !== '/' && <Sidebar/>}
        <div className='content'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/transacciones" element={<Transacciones />} />
      </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
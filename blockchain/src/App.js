import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Formulario from './Formulario'
import Transacciones from './Transacciones'; 
const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/transacciones" element={<Transacciones />} />
      </Routes>
    </Router>
  );
};

export default App;

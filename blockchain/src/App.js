import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Formulario from './Formulario'
const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
};

export default App;

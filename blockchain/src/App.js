import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from './components/MainLayout';


const App = () =>{
  return(
    <Router>
      <MainLayout/>
    </Router>
  );
};

export default App;

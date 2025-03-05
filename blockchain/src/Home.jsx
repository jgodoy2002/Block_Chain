import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
const Home= () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    };

    const handleFormulario = () => {
        navigate('/formulario');
    }
    
    const handleTransacciones = () => {
        navigate('/transacciones');
    }
    
    const [medicamentos, setMedicamentos] = useState([
      {id:1,nombre:"Paracetamol",lote:"123",fecha:"2021-10-10"},
      {id:2,nombre:"Ibuprofeno",lote:"456",fecha:"2021-10-10"},
      {id:3,nombre:"Aspirina",lote:"789",fecha:"2021-10-10"}
    ]);

    const [nuevoMedicamento, setNuevoMedicamento] = useState(
      {nombre:'',lote:'',fecha:''});
    
  return (
    <div className="home">
      <h1>Panel de Control</h1>
      <div className="button-container"> 
      <button className="button-crearFormulario"onClick={handleFormulario}>
        Crear Formulario
      </button>
      <button className="button-regresar" onClick={handleLogout}>
        <FaSignOutAlt />
        </button>
        </div>
      <table border="1" style={{marginTop:20, width:'100%'}}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Lote</th>
            <th>Fecha</th>
          </tr>
          </thead>
          <tbody>
            {medicamentos.map((medicamento) => (
              <tr key={medicamento.id}>
                <td>{medicamento.nombre}</td>
                <td onClick={handleTransacciones} style={{cursor:"pointer"}}>{medicamento.lote}</td>
                <td>{medicamento.fecha}</td>
                </tr>
                ))}     
            </tbody>
        </table>
    </div>

  );
}

export default Home;

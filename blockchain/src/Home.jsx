import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QRPortal from "./imagenes/QR_portalunitec.jpg"
import "./Home.css";
const Home= () => {
    const navigate = useNavigate();
    const [showQR, setShowQR] = useState(false); 
    const handleTransacciones = () => {
        navigate('/transacciones');
    }

    const handleQR = () => setShowQR(true);
    
    const [medicamentos, setMedicamentos] = useState([
      {id:1,nombre:"Paracetamol",lote:"123",fecha:"2021-10-10"},
      {id:2,nombre:"Ibuprofeno",lote:"456",fecha:"2021-10-10"},
      {id:3,nombre:"Aspirina",lote:"789",fecha:"2021-10-10"}
    ]);
    
  return (
    <div className="home-container">
    <div className="home">
      <h1 className='header-container'>Panel de Control</h1>
      <table border="1" style={{marginTop:20, width:'100%'}}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Lote</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
            {medicamentos.map((medicamento) => (
              <tr key={medicamento.id}>
                <td>{medicamento.nombre}</td>
                <td>{medicamento.lote}</td>
                <td>{medicamento.fecha}</td>
                <td>
                  <div className="button-container-Acciones">
                    <button className="button-verMas" onClick={handleTransacciones}>
                      Ver Mas
                    </button>
                    <button className="button-verMas" onClick={handleQR}>
                      Ver QR
                    </button>
                  </div>
                </td>
                </tr>
                ))}     
            </tbody>
        </table>

        {showQR && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={()=> setShowQR(false)}>&times;</span>
              <h2>Codigo QR</h2>
              <img src={QRPortal} alt="Codigo QR" style={{width:200}}/>
            </div>
          </div>
        )}


    </div>
  </div>
  );
}

export default Home;

import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Home= () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
    };
    
    const [medicamentos, setMedicamentos] = useState([
      {id:1,nombre:"Paracetamol",lote:"123",fecha:"2021-10-10"},
      {id:2,nombre:"Ibuprofeno",lote:"456",fecha:"2021-10-10"},
      {id:3,nombre:"Aspirina",lote:"789",fecha:"2021-10-10"}
    ]);

    const [nuevoMedicamento, setNuevoMedicamento] = useState(
      {nombre:'',lote:'',fecha:''});
    
  return (
    <div style={{paddding:20}}>
      <h1>Panel de Control</h1>
      <div>
        <input type="text" name="nombre" placeholder="Nombre" value={nuevoMedicamento.nombre} onChange={(e) => setNuevoMedicamento({...nuevoMedicamento, nombre: e.target.value})}/>
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
                <td>{medicamento.lote}</td>
                <td>{medicamento.fecha}</td>
                </tr>
                ))}     
            </tbody>
        </table>
    </div>

  );
}

export default Home;

import React from "react";
import { data, useNavigate } from "react-router-dom";
import { useState } from "react";
import QRPortal from "./imagenes/QR_portalunitec.jpg"
import "./Home.css";
import {Table , Button} from 'antd'
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

    const columns=[
      {title:'Nombre', dataIndex:'nombre', key:'name'},
      {title:'Lote',dataIndex:'lote', key:'lote'},
      {title:'Fecha',dataIndex:'fecha', key:'fecha'},
      {title:'Acciones', key:'acciones', render:(medicamento)=>
      <Button onClick={handleTransacciones}>Ver Mas</Button>
      }
    ];
    
  return (
    /*
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
                  </div>
                </td>
                </tr>
                ))}     
            </tbody>
        </table>
    </div>
  </div>
  */
  <div className="home-container">
    <Table dataSource={medicamentos} columns={columns} rowKey="id"/>
  </div>
  );
}

export default Home;

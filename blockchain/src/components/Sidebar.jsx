import React from "react";
import {FaHome, FaSignOutAlt, FaClipboard ,FaArchive} from "react-icons/fa";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();
    const handlePanel = () => {
        navigate('/home');
    }

    const handleLogout=()=>{
        navigate('/');
    }
    const handleFormulario = () => { 
        navigate('/formulario');
    }
    const handleTransacciones = () => {
        navigate('/transacciones');
    }   

    return (
        <div className='sidebar'>
            <div className="header">
                <h2>BlockChain</h2>
            </div>
            <ul className="lista" style={{color:"red"}}>
                <li className="lista-item" onClick={handlePanel}>
                    <FaHome/>
                    Panel de Control
                </li>
                <li className="lista-item" onClick={handleFormulario}>
                    <FaClipboard/>
                    Crear Medicamento 
                </li>
                <li className="lista-item" onClick={handleTransacciones}> 
                    <FaArchive/>
                    Transacciones
                </li>
                <li className="lista-item-logout" onClick={handleLogout}> 
                    <FaSignOutAlt/>
                    Salir
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

import React from "react";
import {FaHome, FaSignOutAlt, FaClipboard ,FaArchive} from "react-icons/fa";
import "./Sidebar.css";
import { useNavigate , useLocation} from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
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
                <li className={`lista-item ${location.pathname === "/home" ? "active":""}`} onClick={handlePanel}>
                    <FaHome/>
                    Home
                </li>
                <li className={`lista-item ${location.pathname === "/formulario" ? "active":""}`} onClick={handleFormulario}>
                    <FaClipboard/>
                    Crear Medicamento 
                </li>
                <li className={`lista-item ${location.pathname === "/transacciones" ? "active":""}`} onClick={handleTransacciones}> 
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
